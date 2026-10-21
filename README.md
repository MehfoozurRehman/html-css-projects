# HTML and CSS Projects

A collection of standalone static pages: small front-end experiments (a calculator, a die roller, a custom cursor, a color scheme switch) plus several downloaded or adapted website templates.

**Status:** Prototype. Each experiment is a separate folder with plain HTML, CSS and JavaScript that tests one UI idea. Several larger folders are third-party templates copied in, and nothing ties the folders together.

## The problem

The repo is a practice space for HTML, CSS and vanilla JavaScript. It covers layout and styling exercises, small interactive widgets and full website layouts that were studied or adapted.

## What it does

The standalone experiments each run on their own:

- `Calculator/`: a calculator page with its logic in `js/script.js`.
- `Roll the Die/`: a die roller that swaps between six GIF faces.
- `Custom Cursor/`, `Keyboard/`, `Toggle Page/`: small interaction demos.
- `Prefers Color Scheme/`: a page that follows the operating system's light or dark setting.
- `hamburger/`, `grid/`, `calender/`, `price comparison section/`, `form v1/`, `login master/`: layout and component exercises.

Larger folders hold full website layouts, including `busicol/` (a business site with about, blog, portfolio and service pages), `Baker/`, `Regna/`, `life-care/`, `wallhaven/` and `download/` (a set of software category pages).

## How it's built

- Plain HTML, CSS and JavaScript. There is no build step and no package file.
- Some folders use Bootstrap and other vendor libraries copied into their `assets/vendor` or `lib` folders.
- A `LICENSE` file is at the repo root.

## Running it locally

There is nothing to install. Open any `index.html` in a browser, or serve the folder with a static file server.

## What's left

- Most folders are independent and share no code, so there is no common structure.
- Vendor and template code is copied in, and the repo does not record where each template came from. The README is only a title.
- There are no tests and no linting.
- Several large template folders make up most of the repo's files, and the experiments are hard to find among them.
