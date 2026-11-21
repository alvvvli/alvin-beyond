# Alvin | Beyond Engineering

A companion travel and experiences site built with Material for MkDocs.

## Deploy

1. Create a public GitHub repository named `alvin-beyond` under `alvvvli`.
2. Upload the contents of this folder to the repository root, preserving `.github/workflows/deploy.yml`.
3. In GitHub Settings → Pages, select **Deploy from a branch**, branch **gh-pages**, folder **/(root)**. The first GitHub Actions run creates `gh-pages` (you may need to wait for it before selecting).
4. Push to `main` to trigger automatic deployment.
5. Site URL: `https://alvvvli.github.io/alvin-beyond/`.

If you choose a different repository name, update `site_url`, `repo_url` and `repo_name` in `mkdocs.yml`.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

## Add content

- Add Markdown pages under `docs/`.
- Add images under `docs/assets/images/`.
- Add pages to `nav` in `mkdocs.yml`.
- Use `![Caption](../assets/images/example.jpg)` from a nested page.

The initial travel map is an interactive directory, not yet a geographic map. All unverified details are placeholders.

## Alignment with alvin-site

The site mirrors the parent portfolio's IBM Plex Sans/Mono fonts, slate-only palette, navigation tabs/tracking, code-copy and edit actions, search suggestions, social LinkedIn link, and three CSS entrypoint filenames. The theme's primary/accent colours and content navigation differ intentionally.

**Brand asset:** `docs/assets/yomori-512.png` must be copied from `alvvvli/alvin-site/docs/assets/yomori-512.png` if not already present. The same logo and favicon paths are configured.


## Travel map and journals

- Edit `docs/assets/data/travel-places.json` to maintain the map. Coordinates are approximate marker locations, not GPS traces.
- `docs/map.md` embeds Leaflet and OpenStreetMap tiles (requires network access; no API key).
- Copy `docs/travels/journal-template.md` when creating a new photo journal; add the new page to `mkdocs.yml`.
- Place photos in `docs/assets/photos/`, then replace placeholders with Markdown image links.
- Never publish the original itinerary document, confirmation codes, private contacts, or precise accommodation details.


## Narumi Gen branding

The supplied Narumi Gen artwork is stored at `docs/assets/narumigen.jpeg` and used as the Material logo, favicon, and homepage feature image. For a more legible small browser favicon, consider replacing it later with a square, simplified crop.

## Site artwork

The logo and favicon use `docs/assets/yomori-512.png`, matching the original portfolio asset path and 512px PNG format. The image is sourced from user-provided artwork; attribution: [Kaiju No. 8 official website](https://kaiju-no8.net/). This attribution does not imply the site is officially affiliated.
