from pathlib import Path
import base64
import hashlib
import json
import shutil
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "asset-payload" / "approved-webp"
PUBLIC_DEST = ROOT / "public" / "screenshots" / "approved"
DOCS_DEST = ROOT / "docs-site" / "screenshots"

EXPECTED = {
    "dashboard.webp": (2048, 1036, "bd4f9f9bcf9002f3216d285597e3d53622da898662cc50e0075c38bbae1a9e95"),
    "assets.webp": (2048, 953, "c682578c47b4268a975fdbe1ea5d3902322865f423052e4c4db291ee0dabfd7d"),
    "cases-list.webp": (2048, 953, "b06ab61cc4c49d121b73c4362876470ac522b4b1958f6b86be19a71762e845b6"),
    "intake.webp": (2048, 953, "57011bbcd591d6a337beaf348b7fae0ddd4fb4f187f1e50d861b4fd7c867cc3b"),
    "disposition.webp": (2048, 953, "a466858c065b0fb69f5069f64de9e4d0dcff2a3896f471b89e0192ef999f9491"),
    "reports.webp": (2048, 1036, "b6753db046f438a8426d5debda1da78d9b5b0365c9ced79d9d66b525e3ea805b"),
    "administration.webp": (2048, 953, "a402b92ca4a2b261e58427f9549dcaf7c8eef20596eb85174a08511a7fb8750e"),
    "branding.webp": (2048, 1036, "1d6bba7fc4e05a66bc65a66b91ee58c15728ffdeeee9031d67b85ce4532aeb72"),
    "pickup-deadline.webp": (2048, 1036, "02402788c23a8a9235cd578a69faf33cfafd4e9c99462a2b605c516f00b89697"),
    "import-history.webp": (2048, 1036, "35b1dfd7b4665a5a4be990aa26a103529e55977bae5558d4ef1b76c53cb7df74"),
    "qr-label.webp": (576, 432, "3828fbd9205f1c2d42b442e094f6172885397f79a1ea8a08f3b5853bf18484c5"),
}


def main() -> None:
    part_files = sorted(PARTS.glob("part-*.b64"))
    if not part_files:
        raise RuntimeError("Approved screenshot payload parts are missing")

    encoded = "".join(p.read_text(encoding="utf-8").strip() for p in part_files)
    archive = base64.b64decode(encoded, validate=True)

    for dest in (PUBLIC_DEST, DOCS_DEST):
        dest.mkdir(parents=True, exist_ok=True)
        for old in dest.glob("*.webp"):
            old.unlink()

    with tempfile.TemporaryDirectory() as td:
        temp = Path(td)
        archive_path = temp / "approved-webp.zip"
        archive_path.write_bytes(archive)
        if not zipfile.is_zipfile(archive_path):
            raise RuntimeError("Approved screenshot payload is not a ZIP archive")

        with zipfile.ZipFile(archive_path) as zf:
            names = {Path(name).name for name in zf.namelist()}
            missing = set(EXPECTED).difference(names)
            if missing:
                raise RuntimeError("Approved screenshot archive is missing: " + ", ".join(sorted(missing)))

            for filename, (_width, _height, expected_hash) in EXPECTED.items():
                data = zf.read(filename)
                actual_hash = hashlib.sha256(data).hexdigest()
                if actual_hash != expected_hash:
                    raise RuntimeError(f"Approved screenshot checksum mismatch: {filename}")
                (PUBLIC_DEST / filename).write_bytes(data)
                shutil.copyfile(PUBLIC_DEST / filename, DOCS_DEST / filename)

    print(f"Prepared {len(EXPECTED)} approved screenshots for website and docs.")


if __name__ == "__main__":
    main()
