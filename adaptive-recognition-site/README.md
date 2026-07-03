# Adaptive Recognition — landing page pre samosprávy

Päťjazyčná (SK/CZ/EN/PL/HU) single-file landing page nasadená na Vercel:
https://adaptive-recognition-three.vercel.app

- `index.html` — koreň (kópia SK verzie)
- `sk.html`, `cz.html`, `en.html`, `pl.html`, `hu.html` — jazykové verzie (`/sk`, `/cz`, `/en`, `/pl`, `/hu` cez cleanUrls)
- `vercel.json` — konfigurácia (cleanUrls)

Obrázky sú vložené inline ako base64 — súbory sú self-contained.
Nasadenie: `npx vercel deploy --prod --yes` v tomto adresári.
