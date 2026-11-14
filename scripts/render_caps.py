"""Génère les visuels produit à partir d'une photo de trucker vierge.

Usage : python scripts/render_caps.py <dossier_des_écussons_png>
La photo de base (assets/base-trucker.jpg, Fabio T. / Unsplash) est recolorée
selon les coloris de src/data/products.json ; l'écusson de chaque modèle est
incrusté sur la façade. Sorties : public/caps/<slug>.webp et <slug>-detail.webp.
"""
import json, sys, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
patch_dir = sys.argv[1]
base = Image.open(os.path.join(ROOT, "assets/base-trucker.jpg")).convert("RGB")
W, H = base.size
a = np.asarray(base).astype(np.float32) / 255.0
lum = a @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
yy, xx = np.mgrid[0:H, 0:W]

# Façade : polygone large, borné par les zones sombres (filet, visière, bouton).
poly = [(562,604),(553,480),(566,380),(598,292),(648,226),(703,187),(760,181),(815,181),(900,193),(982,236),(1032,300),(1054,400),(1062,500),(1064,562),(1000,602),(900,637),(800,650),(700,642),(620,622)]
pm = Image.new("L", (W, H), 0); ImageDraw.Draw(pm).polygon(poly, fill=255)
dark = np.clip((0.62 - lum) / 0.16, 0, 1)          # 1 = tissu sombre
panel = (np.asarray(pm.filter(ImageFilter.GaussianBlur(1.5))).astype(np.float32) / 255.0) * (1 - dark)
panel = np.asarray(Image.fromarray((panel * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))).astype(np.float32) / 255.0
cap_dark = dark * (1 - panel)
visor_zone = (yy > 598 - (xx - 510) * (88 / 550)) | (yy < 186)
visor = cap_dark * visor_zone
mesh = cap_dark * (~visor_zone)
L_REF = float(np.median(lum[(visor > 0.9)]))

def rgb(h): h = h.lstrip("#"); return np.array([int(h[i:i+2], 16) for i in (0, 2, 4)], dtype=np.float32) / 255.0

def dark_recolor(target):
    """Recolore un tissu noir en conservant le relief (coutures, plis)."""
    s = lum / L_REF
    s = 1 + (s - 1) * 0.55
    tl = float(target @ np.array([0.299, 0.587, 0.114]))
    gain = 0.92 if tl > 0.25 else 1.0
    out = target[None, None, :] * np.clip(s, 0.45, 1.5)[..., None] * gain
    if tl < 0.12:   # cible très sombre : on garde la matière d'origine
        out = a * (0.6 + tl * 3)
    return np.clip(out, 0, 1)

PAPER = rgb("#FBF8F1")
SIZE = 1200

def render(colors, patch_png):
    out = a * (PAPER / 0.953)[None, None, :]                                  # fond harmonisé avec le site
    shade = np.clip(a / 0.985, 0, 1)
    pcol = rgb(colors["panel"])
    pl = float(pcol @ np.array([0.299, 0.587, 0.114]))
    psh = shade ** (1.0 if pl > 0.5 else 1.6)                                 # contraste renforcé sur les teintes sombres
    out = out * (1 - panel[..., None]) + (pcol[None, None, :] * psh) * panel[..., None]
    out = out * (1 - mesh[..., None]) + dark_recolor(rgb(colors["mesh"])) * mesh[..., None]
    out = out * (1 - visor[..., None]) + dark_recolor(rgb(colors["visor"])) * visor[..., None]
    img = Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))
    # écusson
    p = Image.open(patch_png).convert("RGBA").resize((250, 156), Image.LANCZOS).rotate(-2, expand=True, resample=Image.BICUBIC)
    px, py = 812 - p.width // 2, 408 - p.height // 2
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sh.paste((0, 0, 0, 90), (px + 2, py + 5), p.split()[3])
    img = Image.alpha_composite(img.convert("RGBA"), sh.filter(ImageFilter.GaussianBlur(5)))
    local = Image.fromarray((np.clip(lum / 0.9, 0.82, 1.0) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(12)).crop((px, py, px + p.width, py + p.height))
    pr = np.asarray(p).astype(np.float32); pr[..., :3] *= (np.asarray(local).astype(np.float32) / 255.0)[..., None]
    img.alpha_composite(Image.fromarray(pr.astype(np.uint8)), (px, py))
    img = img.convert("RGB")
    # cadrage carré centré sur la casquette
    canvas = Image.new("RGB", (SIZE, SIZE), tuple(int(v * 255) for v in PAPER))
    crop = img.crop((210, 0, 210 + SIZE, H))
    canvas.paste(crop, (0, (SIZE - H) // 2 + 20))
    detail = img.crop((572, 168, 572 + 480, 168 + 480)).resize((900, 900), Image.LANCZOS)
    return canvas.resize((1000, 1000), Image.LANCZOS), detail

items = json.load(open(os.path.join(ROOT, "src/data/products.json")))
items.append({"slug": "edition-club", "colors": {"panel": "#1A1A1A", "mesh": "#12201A", "visor": "#12201A", "patch": "#F4EFE4", "patchInk": "#12201A"}})
for it in items:
    main, detail = render(it["colors"], os.path.join(patch_dir, it["slug"] + ".png"))
    main.save(os.path.join(ROOT, "public/caps", it["slug"] + ".webp"), quality=84, method=6)
    detail.save(os.path.join(ROOT, "public/caps", it["slug"] + "-detail.webp"), quality=82, method=6)
print("rendus :", len(items))
