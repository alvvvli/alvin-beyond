# Alvin Beyond — JYZ-aligned edition

Companion to https://alvvvli.github.io/alvin-site/ using Material for MkDocs, IBM Plex and a slate/green theme.

## Deploy

1. Create a public GitHub repository `alvvvli/alvin-beyond`.
2. Upload the **contents** of this folder to the repository root.
3. Copy `docs/assets/yomori-512.png` from your existing `alvin-site` repository (not included here).
4. GitHub Actions deploys to the `gh-pages` branch. Configure Settings > Pages > Deploy from a branch > `gh-pages` / root after the workflow succeeds.
5. Public URL: https://alvvvli.github.io/alvin-beyond/

## Local preview

```sh
pip install -r requirements.txt
mkdocs serve
```

## Editorial safeguards

The JYZ source contains planned and cancelled trips as well as completed journeys. Do not automatically treat all notes as visits. The source also contains personal and financial identifiers: do not commit the original source file, confirmation codes, payment amounts, full hotel addresses or personal contacts. This starter includes only high-level public-facing destination and activity summaries.

Entries marked 'Other record' originate from earlier travel-map discussions rather than the supplied JYZ text. Event names and travel-entry classifications require verification where indicated.
