from pathlib import Path
import base64
import gzip
import io
import shutil
import struct
import tarfile
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "asset-payload" / "approved-screenshots"
DEST = ROOT / "public" / "screenshots-approved"
LEGACY = ROOT / "public" / "screenshots"

CANONICAL = {
    "dashboard": "dashboard.png",
    "assets": "assets.png",
    "cases list": "cases-list.png",
    "cases-list": "cases-list.png",
    "administration": "administration.png",
    "reports": "reports.png",
    "intake": "intake.png",
    "disposition": "disposition.png",
    "pickup deadline": "pickup-deadline.png",
    "pickup-deadline": "pickup-deadline.png",
    "import history": "import-history.png",
    "import-history": "import-history.png",
    "branding": "branding.png",
}

LEGACY_COMPAT = {
    "dashboard.svg": "dashboard.png",
    "assets.svg": "assets.png",
    "cases.svg": "cases-list.png",
    "reports.svg": "reports.png",
    "administration.svg": "administration.png",
}


def normalize_stem(path: Path) -> str:
    return path.stem.lower().replace("_", " ").strip()


def extract_payload(data: bytes, target: Path) -> None:
    try:
        data = gzip.decompress(data)
    except OSError:
        pass

    bio = io.BytesIO(data)
    if zipfile.is_zipfile(bio):
        bio.seek(0)
        with zipfile.ZipFile(bio) as zf:
            zf.extractall(target)
        return

    bio.seek(0)
    try:
        with tarfile.open(fileobj=bio, mode="r:*") as tf:
            tf.extractall(target)
        return
    except tarfile.TarError:
        pass

    raise RuntimeError("Approved screenshot payload is not a recognized archive")


def png_size(data: bytes) -> tuple[int, int]:
    if data[:8] != b"\x89PNG\r\n\x1a\n" or data[12:16] != b"IHDR":
        raise RuntimeError("Expected PNG screenshot data")
    return struct.unpack(">II", data[16:24])


def write_svg_wrapper(svg_path: Path, png_path: Path) -> None:
    data = png_path.read_bytes()
    width, height = png_size(data)
    encoded = base64.b64encode(data).decode("ascii")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMid meet">'
        f'<image width="{width}" height="{height}" preserveAspectRatio="xMidYMid meet" '
        f'href="data:image/png;base64,{encoded}"/></svg>'
    )
    svg_path.write_text(svg, encoding="utf-8")


def main() -> None:
    part_files = sorted(PARTS.glob("part-*.b64"))
    if not part_files:
        raise RuntimeError("Approved screenshot payload parts are missing")

    encoded = "".join(p.read_text(encoding="utf-8").strip() for p in part_files)
    archive = base64.b64decode(encoded)

    DEST.mkdir(parents=True, exist_ok=True)
    LEGACY.mkdir(parents=True, exist_ok=True)
    for old in DEST.glob("*"):
        if old.is_file():
            old.unlink()
        elif old.is_dir():
            shutil.rmtree(old)

    with tempfile.TemporaryDirectory() as td:
        temp = Path(td)
        extract_payload(archive, temp)

        found = {}
        for path in temp.rglob("*"):
            if path.is_file():
                found[normalize_stem(path)] = path

        copied = []
        for source_key, output_name in CANONICAL.items():
            source = found.get(source_key)
            if source is None:
                continue
            if source.suffix.lower() != ".png":
                raise RuntimeError(f"Expected PNG for {source.name}, got {source.suffix}")
            output = DEST / output_name
            shutil.copyfile(source, output)
            copied.append(output_name)

        required = {"dashboard.png", "assets.png", "cases-list.png", "administration.png", "reports.png", "intake.png", "disposition.png"}
        missing = required.difference(copied)
        if missing:
            raise RuntimeError("Approved screenshot archive is missing: " + ", ".join(sorted(missing)))

    for legacy_name, approved_name in LEGACY_COMPAT.items():
        write_svg_wrapper(LEGACY / legacy_name, DEST / approved_name)

    print("Prepared approved screenshots: " + ", ".join(sorted(copied)))


if __name__ == "__main__":
    main()
