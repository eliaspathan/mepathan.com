# Jinko Blog

A responsive blog UI built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. The interface is populated with sample content from `src/data/mockData.ts`.

## Getting started

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite to view the app.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  components/  Blog page components
  data/        Sample posts, authors, categories, and social links
  App.tsx      Page layout and post pagination
  index.css    Global styles and Tailwind CSS imports
```

Update `src/data/mockData.ts` to customize the sample blog content.

## Design inspiration

The design was inspired by the [Jinko theme demo](https://www.3forty.media/jinko/demo/).

## License

This project is licensed under the [MIT License](LICENSE.md).
