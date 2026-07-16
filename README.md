# Portfolio

A clean, single-page portfolio site with a Home page and a tabbed gallery for four categories: **Graphic Design**, **Painting**, **Physical Media**, and **Digital Media**. Click any piece to view it fullscreen at full resolution.

No build step — plain HTML, CSS, and JS.

## Viewing it locally

From this folder, run a static server, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. (Opening `index.html` directly by double-clicking usually works too, but a local server avoids any browser file:// restrictions.)

## Setting up the Home page

Open `index.html` and find the `<section class="panel active" id="home">` block near the top of `<main>`:

- **Logo**: replace `images/logo.svg` with your own logo file (square works best — it's cropped into a circle). Keep the filename `logo.svg`, or update the `src` on the `.logo-img` tag if you rename it.
- **Name / tagline**: edit the text inside `.home-title` and `.home-tagline`.
- **Blurb**: replace the placeholder paragraph inside `.home-blurb` with a short intro about yourself and your practice.

## Adding your own work

1. Drop your image files into the matching folder:
   - `images/graphic-design/`
   - `images/painting/`
   - `images/physical-media/`
   - `images/digital-media/`

   Use full-resolution images (e.g. JPG or PNG, ideally under a few MB each) — the lightbox displays them at native size, and the grid thumbnail is generated from the same file.

2. Open `js/data.js` and list each image with a title, for example:

   ```js
   "painting": [
     { src: "images/painting/sunset-harbor.jpg", title: "Sunset Harbor" },
     { src: "images/painting/self-portrait.jpg", title: "Self Portrait" }
   ],
   ```

3. Delete the placeholder `.svg` files in each folder and their entries in `data.js` once you've added real work.

4. Update the name in `index.html` (the `<title>` tag and `.brand` link) and in the footer.

## Deploying

Any static host works — GitHub Pages, Netlify, Vercel, etc. For GitHub Pages: push this repo, then enable Pages for the branch/folder in the repo settings.
