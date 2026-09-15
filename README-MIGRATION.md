# FR + EN portfolio migration

Replace these files in your Astro project:

- `src/components/Portfolio.astro` (new)
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/en/index.astro` (new)
- `src/styles/global.css`
- `astro.config.mjs`

Keep your existing assets:
- `public/images/amazon-dashboard-preview.webp`
- `public/videos/PSG_vs_Arsenal_Football_Momentum.mp4`
- `public/favicon.svg`

Routes:
- `/` = French
- `/en/` = English

After copying:
1. `npm run dev`
2. Test `/` and `/en/`
3. `git add .`
4. `git commit -m "feat: add French and English portfolio versions"`
5. `git push`
