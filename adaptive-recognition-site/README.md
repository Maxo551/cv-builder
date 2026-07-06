# Adaptive Recognition — landing page pre samosprávy

Štvorjazyčná (SK/CZ/EN/PL) single-file landing page nasadená na Vercel:
https://adaptive-recognition-three.vercel.app

- `index.html` — koreň (kópia SK verzie)
- `sk.html`, `cz.html`, `en.html`, `pl.html` — jazykové verzie (`/sk`, `/cz`, `/en`, `/pl` cez cleanUrls)
- `vercel.json` — konfigurácia (cleanUrls)

Obrázky sú vložené inline ako base64 — súbory sú self-contained.
Nasadenie: `npx vercel deploy --prod --yes` v tomto adresári.
