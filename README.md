# MAAP-LAB.github.io

Site for **MAAP — Music AI Assemble People**. Lives at https://maap-lab.github.io/.

Built with Vite + React + TypeScript. The workflow at
`.github/workflows/deploy.yml` builds on every push to `main` and force-pushes
the `dist/` output to the `gh-pages` branch. Pages is served from `gh-pages`.

## Editing content

All content lives under `src/data/`:

- `info.ts`         — lab name, tagline, top-level links
- `members.ts`      — member roster
- `projects.ts`     — research projects
- `publications.ts` — collected publications
- `news.ts`         — news feed

Members typically own a PR that updates their own row in `members.ts`.

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to ./dist
```

## Contributing

1. Fork the repo (or work on a branch if you have direct access).
2. Make your change in `src/data/...`.
3. Open a PR. The MAAP lead reviews and merges; no direct pushes to `main`.
