# Uttam's Portfolio

A polished set of React UI components and app scaffolding built with Vite, TypeScript and TailwindCSS — designed for rapid prototyping and beautiful interfaces.

This repository is a developer-friendly component library and starter app that showcases reusable UI primitives, patterns and utilities for building modern React applications.

**Tech stack:** `Vite`, `React`, `TypeScript`, `Tailwind CSS`.

## Quick Links

- **Live preview:** (run locally, see Quick Start)
- **Source:** This repository contains the component library and demo app under `src/`.

## Quick Start

1. Install dependencies (PowerShell):

```powershell
npm install
```

2. Run the development server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

4. Preview the production build locally:

```powershell
npm run preview
```

Notes:
- If you use a different shell, replace PowerShell commands accordingly.

## Project Structure

- `src/` : Application source code
  - `components/` : Reusable UI components and primitives
    - `ui/` : Collection of UI primitives (buttons, cards, dialogs, forms, etc.)
  - `pages/` : App pages (demo, index, not-found)
  - `hooks/` : Custom React hooks
  - `lib/` : Utilities and helpers
- `public/` : Static assets
- `vite.config.ts` : Vite config
- `tsconfig*.json` : TypeScript configuration

## Development Tips

- Start with `src/pages/Index.tsx` to see example usage of components.
- Components are intentionally small and composable — prefer composition over monolithic components.
- Use the `ui/` primitives when building new UI to maintain consistent styling and accessibility.

## Styling

This project uses Tailwind CSS and PostCSS. Customize styles via `tailwind.config.ts` and `index.css`.

## Testing & Linting

- Linting, type checks and tests (if present) should be run before commits. Add or run scripts as needed in `package.json`.

## Contributing

- Fork the repo and open a pull request with a clear description of your changes.
- Keep commits focused and add stories/examples when adding or changing components.
- Document any new public APIs or props in the component files or a docs folder.

## License

Specify your license here (e.g. MIT). If you need help adding a license file, tell me which license you want and I’ll add it.

## Acknowledgements

- Built with Vite, React, TypeScript and Tailwind CSS.
- Inspired by component libraries and modern design systems.

---

If you want, I can:
- add a `LICENSE` file,
- add example stories with Storybook,
- or wire up a simple demo deployment (Netlify/Vercel).
Tell me which you'd like next.
