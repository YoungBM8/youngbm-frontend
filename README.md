# Young BM Network — website

React 19 + Vite + React Router. All editable content (menus, texts, images,
news slides, editions, sponsors, speakers…) comes from the Django backend's
read-only API; the owners change it in the back office, no deploy needed.

## Local development

```bash
nvm use 22            # Vite 8 needs Node 20.19+ / 22.12+
npm install
cp .env.example .env  # VITE_API_URL=http://localhost:8000
npm run dev
```

Run the backend alongside (see `../youngbm-backend/README.md`). The site shows
loading placeholders until the API answers.

## How content flows

* `src/api/client.js` — `fetchJson`, `useApi(path)`, `usePage(slug)`. Responses
  are cached per path for the lifetime of the tab.
* `src/context/SiteContext.jsx` — loads `/api/site/` once: site settings,
  menus and the current congress / seminar editions. `useSite()` anywhere.
* `src/components/RichText.jsx` — renders HTML written in the back office.
  The backend sanitises it on save.
* Page components (`src/components/*Content.jsx`) keep the original markup and
  CSS classes and fill them from `usePage("<slug>")` plus list endpoints.
* `src/components/PageSections.jsx` renders a page's sections in order: text
  blocks, card grids and call-to-action boxes with the generic designs, and
  *component* sections through `src/components/ComponentSection.jsx`
  (slideshow, FAQ list, board, partners, student organisations, sponsors,
  speakers, editions timeline, events board, edition summary card; the blocks
  live in `src/components/blocks/`, edition helpers in `src/utils/editions.js`).
  The home page, the list pages (FAQ, board, partners, student organisations,
  sponsors, speakers), Our Story and owner-created pages (`/pages/:slug`) are
  "header + sections".
* Pages with a fixed design consume their block/card/cta sections themselves
  and render any other sections below the fixed content through
  `src/components/PageComponents.jsx`.

Decorative images that are part of the design stay in `src/assets`
(logo, arrows, seminar illustrations). Everything else is uploaded through
the back office. The remaining files in `src/assets` are used by the backend's
`seed_content` command and can be removed once production has been seeded.

## Adding a new built-in page

1. Backend: add `(slug, path, title, subtitle)` to `content/builtin.py` and run
   `python manage.py bootstrap_cms`.
2. Frontend: create the page component, read `usePage("<slug>")`, render its
   sections with `PageSections` (or `PageComponents` below a fixed design), and
   add the route in `src/App.jsx` with the same path.
3. The owners can now link it from Menus.

## Icons

The apply-page icon grid uses lucide icons chosen in the back office. The list
in `src/components/ApplyHereBlueMenu.jsx` must match `ICON_CHOICES` in the
backend's `content/models.py`.

## Scripts

* `npm run dev` — development server
* `npm run build` — production build to `dist/`
* `npm run lint` — oxlint
