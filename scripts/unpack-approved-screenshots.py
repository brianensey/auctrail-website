from pathlib import Path
import base64
import gzip
import io
import shutil
import tarfile
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "asset-payload" / "approved-screenshots"
DEST = ROOT / "public" / "screenshots-approved"

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


def normalize_stem(path: Path) -> str:
    return path.stem.lower().replace("_", " ").strip()


def extract_payload(data: bytes, target: Path) -> None:
    # The payload is gzip-compressed; after decompression it may be a tar,
    # zip, or a single archive produced by the screenshot packaging step.
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


def main() -> None:
    part_files = sorted(PARTS.glob("part-*.b64"))
    if not part_files:
        raise RuntimeError("Approved screenshot payload parts are missing")

    encoded = "".join(p.read_text(encoding="utf-8").strip() for p in part_files)
    archive = base64.b64decode(encoded)

    DEST.mkdir(parents=True, exist_ok=True)
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
            if not path.is_file():
                continue
            stem = normalize_stem(path)
            found[stem] = path

        copied = []
        for source_key, output_name in CANONICAL.items():
            source = found.get(source_key)
            if source is None:
                continue
            # The approved ChatGPT Library screenshot set is PNG. Preserve
            # the original bytes and resolution rather than re-encoding it.
            if source.suffix.lower() != ".png":
                raise RuntimeError(f"Expected PNG for {source.name}, got {source.suffix}")
            shutil.copyfile(source, DEST / output_name)
            copied.append(output_name)

        required = {"dashboard.png", "assets.png", "cases-list.png", "administration.png", "reports.png", "intake.png", "disposition.png"}
        missing = required.difference(copied)
        if missing:
            raise RuntimeError("Approved screenshot archive is missing: " + ", ".join(sorted(missing)))

        print("Prepared approved screenshots: " + ", ".join(sorted(copied)))


if __name__ == "__main__":
    main()
