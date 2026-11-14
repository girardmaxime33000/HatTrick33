// Génère l'écusson de chaque modèle (PNG transparent) : node scripts/render_patches.js <dossier_sortie>
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const root = path.join(__dirname, "..");
const out = process.argv[2];
const items = JSON.parse(fs.readFileSync(path.join(root, "src/data/products.json"), "utf8"));
items.push({ slug: "edition-club", code: "CLUB", colors: { patch: "#F4EFE4", patchInk: "#12201A" } });
const font = (pkg, file) => "file://" + path.join(root, "node_modules/@fontsource-variable", pkg, "files", file);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 500, height: 312 }, deviceScaleFactor: 2 });
  for (const it of items) {
    await p.setContent(`<style>
      @font-face{font-family:F;font-style:italic;font-weight:100 900;src:url(${font("fraunces", "fraunces-latin-wght-italic.woff2")})}
      @font-face{font-family:S;font-weight:400 700;src:url(${font("instrument-sans", "instrument-sans-latin-wght-normal.woff2")})}
      html,body{margin:0;background:transparent}
      .p{width:500px;height:312px;box-sizing:border-box;border-radius:44px;background:${it.colors.patch};color:${it.colors.patchInk};display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}
      .p:before{content:"";position:absolute;inset:20px;border:5px dashed ${it.colors.patchInk};opacity:.55;border-radius:28px}
      b{font:italic 700 ${it.code.length > 3 ? 118 : 138}px/1 F;letter-spacing:-2px}
      i{font:600 30px/1 S;font-style:normal;letter-spacing:9px;margin-top:10px}
    </style><div class="p"><b>${it.code}</b><i>HAT-TRICK33</i></div>`);
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(out, it.slug + ".png"), omitBackground: true });
  }
  await b.close();
})();
