from pathlib import Path
import base64
import hashlib
import shutil

ROOT = Path(__file__).resolve().parents[1]
PARTS = ROOT / "asset-payload" / "approved-webp"
PUBLIC_DEST = ROOT / "public" / "screenshots" / "approved"
DOCS_DEST = ROOT / "docs-site" / "screenshots"

EXPECTED = {
    "dashboard.webp": (1000, 506, "2df11a7fd858bb5e1ded1b68cf0fbc869329974dd3ae004fa9cf969982dbfbe5"),
    "assets.webp": (1000, 465, "137c66e1c95d7876052ae7519e181189472d0b73dafcf60a4cc9f59499acfaac"),
    "cases-list.webp": (1000, 465, "3cde3f82a549294719d6159a235690e225e9bd5f8550e24ea30af2b9b1e927c8"),
    "reports.webp": (1000, 506, "af82c35ec4cbbb0cc69cd3a580cd7f703965e24eca937ccec287e2150c2761c7"),
    "administration.webp": (1000, 465, "2b96e5e970377142bce0d89f9e20bf66420b9c43696175a80fc6ea8ff041b1b3"),
}


def main() -> None:
    for dest in (PUBLIC_DEST, DOCS_DEST):
        dest.mkdir(parents=True, exist_ok=True)
        for old in dest.glob("*.webp"):
            old.unlink()

    for filename, (_width, _height, expected_hash) in EXPECTED.items():
        source = PARTS / f"{Path(filename).stem}.b64"
        if not source.exists():
            raise RuntimeError(f"Approved screenshot payload is missing: {source.name}")
        data = base64.b64decode(source.read_text(encoding="utf-8").strip(), validate=True)
        if len(data) < 16 or data[:4] != b"RIFF" or data[8:12] != b"WEBP":
            raise RuntimeError(f"Approved screenshot is not a WebP file: {filename}")
        actual_hash = hashlib.sha256(data).hexdigest()
        if actual_hash != expected_hash:
            raise RuntimeError(f"Approved screenshot checksum mismatch: {filename}")
        output = PUBLIC_DEST / filename
        output.write_bytes(data)
        shutil.copyfile(output, DOCS_DEST / filename)

    print(f"Prepared {len(EXPECTED)} approved screenshots for website and docs.")


if __name__ == "__main__":
    main()
