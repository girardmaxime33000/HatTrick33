import { getProduct, type CapColors } from "@/lib/products";

/**
 * Illustrations des coups : personnages originaux en style papier découpé,
 * chacun portant la casquette du modèle et jouant le coup correspondant.
 */

type PlayerProps = {
  cap: CapColors;
  code: string;
  skin: string;
  jacket: string;
  pants: string;
  hair?: "bob" | "pony" | "beard" | "short";
  hairColor?: string;
  /** Angles des bras en degrés : 0 = le long du corps, 180 = à la verticale. */
  armL: number;
  armR: number;
  racketHand?: "L" | "R";
  racketAngle?: number;
  racket?: string;
  look?: [number, number];
  mouth?: "smile" | "open" | "grin" | "flat";
  brows?: boolean;
  tuck?: boolean;
  crouch?: boolean;
};

const INK = "#1a1a1a";
const edge = { stroke: INK, strokeOpacity: 0.28, strokeWidth: 1.5 };

function Racket({ color, angle }: { color: string; angle: number }) {
  const holes = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) holes.push(<circle key={`${r}-${c}`} cx={-10 + c * 10} cy={46 + r * 9} r="2.4" fill="#fff" opacity=".85" />);
  return (
    <g transform={`rotate(${angle})`}>
      <rect x="-4.5" y="4" width="9" height="26" rx="3" fill={INK} />
      <path d="M-4.5 26 L-13 38 H13 L4.5 26Z" fill={color} {...edge} />
      <ellipse cx="0" cy="60" rx="25" ry="30" fill={color} {...edge} />
      {holes}
    </g>
  );
}

function Arm({ side, angle, sleeve, skin, children }: { side: 1 | -1; angle: number; sleeve: string; skin: string; children?: React.ReactNode }) {
  return (
    <g transform={`translate(${side * 46} 106) rotate(${-side * angle})`}>
      {children && <g transform="translate(0 58)">{children}</g>}
      <rect x="-13" y="-6" width="26" height="60" rx="13" fill={sleeve} {...edge} />
      <circle cx="0" cy="60" r="13.5" fill={skin} {...edge} />
    </g>
  );
}

function Player(p: PlayerProps) {
  const [lx, ly] = p.look ?? [0, 0];
  const hairColor = p.hairColor ?? "#3b2a1e";
  const legH = p.tuck ? 16 : p.crouch ? 18 : 34;
  const feetY = 166 + legH + 4;
  const rk = <Racket color={p.racket ?? "#e23d3d"} angle={p.racketAngle ?? 0} />;
  return (
    <g>
      {/* jambes et pieds */}
      <rect x="-36" y="160" width="72" height={legH + 6} rx="6" fill={p.pants} {...edge} />
      <line x1="0" y1="172" x2="0" y2={166 + legH} stroke={INK} strokeOpacity=".3" strokeWidth="1.5" />
      <ellipse cx={p.tuck ? -26 : -22} cy={feetY} rx="23" ry="8.5" fill={INK} />
      <ellipse cx={p.tuck ? 26 : 22} cy={feetY} rx="23" ry="8.5" fill={INK} />
      {/* bras */}
      <Arm side={-1} angle={p.armL} sleeve={p.jacket} skin={p.skin}>{p.racketHand === "L" ? rk : null}</Arm>
      <Arm side={1} angle={p.armR} sleeve={p.jacket} skin={p.skin}>{p.racketHand !== "L" ? rk : null}</Arm>
      {/* buste */}
      <path d="M-46 96 Q0 84 46 96 L57 164 Q0 176 -57 164Z" fill={p.jacket} {...edge} />
      <line x1="0" y1="92" x2="0" y2="168" stroke={INK} strokeOpacity=".3" strokeWidth="1.5" />
      <path d="M-18 92 Q0 104 18 92" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1.5" />
      {/* cheveux derrière la tête */}
      {p.hair === "bob" && <ellipse cx="0" cy="58" rx="70" ry="56" fill={hairColor} />}
      {p.hair === "pony" && <path d="M52 40 Q104 44 92 104 Q74 84 56 78Z" fill={hairColor} />}
      {/* tête */}
      <ellipse cx="0" cy="50" rx="62" ry="53" fill={p.skin} {...edge} />
      {p.hair === "short" && <path d="M-61 44 Q-60 62 -54 70 L-52 40Z M61 44 Q60 62 54 70 L52 40Z" fill={hairColor} />}
      {p.hair === "pony" && <path d="M-61 44 Q-60 60 -55 66 L-52 40Z M61 44 Q60 60 55 66 L52 40Z" fill={hairColor} />}
      {p.hair === "beard" && <path d="M-58 66 Q-40 112 0 104 Q40 112 58 66 Q30 84 0 80 Q-30 84 -58 66Z" fill={hairColor} />}
      {/* yeux */}
      <ellipse cx="-19" cy="56" rx="19" ry="21" fill="#fff" stroke={INK} strokeWidth="1.3" transform="rotate(8 -19 56)" />
      <ellipse cx="19" cy="56" rx="19" ry="21" fill="#fff" stroke={INK} strokeWidth="1.3" transform="rotate(-8 19 56)" />
      <circle cx={-14 + lx} cy={57 + ly} r="3.6" fill={INK} />
      <circle cx={14 + lx} cy={57 + ly} r="3.6" fill={INK} />
      {p.brows && <path d="M-36 34 L-8 42 M36 34 L8 42" stroke={INK} strokeWidth="4" strokeLinecap="round" />}
      {/* bouche */}
      {(p.mouth ?? "smile") === "smile" && <path d="M-11 86 Q0 95 11 86" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />}
      {p.mouth === "flat" && <path d="M-9 89 H9" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />}
      {p.mouth === "open" && (
        <g>
          <ellipse cx="0" cy="89" rx="11" ry="9" fill="#7a1f1f" stroke={INK} strokeWidth="1.3" />
          <rect x="-7" y="81.5" width="14" height="4" rx="1.5" fill="#fff" />
        </g>
      )}
      {p.mouth === "grin" && <path d="M-15 84 Q0 100 15 84Z" fill="#fff" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />}
      {/* casquette */}
      <path d="M-63 32 C-64 -8 -34 -26 0 -26 C34 -26 64 -8 63 32Z" fill={p.cap.mesh} {...edge} />
      <path d="M-63 32 C-64 -8 -34 -26 0 -26 C34 -26 64 -8 63 32Z" fill="url(#art-mesh)" />
      <path d="M-36 32 C-38 -6 -18 -24 0 -24 C18 -24 38 -6 36 32Z" fill={p.cap.panel} {...edge} />
      <circle cx="0" cy="-26" r="4.5" fill={p.cap.visor} />
      <rect x="-21" y="-10" width="42" height="24" rx="4" fill={p.cap.patch} stroke={p.cap.patchInk} strokeOpacity=".4" />
      <text x="0" y="7" textAnchor="middle" fontFamily="var(--display)" fontStyle="italic" fontWeight="700" fontSize="14" fill={p.cap.patchInk}>{p.code}</text>
      <path d="M-66 30 Q0 16 66 30 Q52 52 0 52 Q-52 52 -66 30Z" fill={p.cap.visor} {...edge} />
      <path d="M-66 30 Q0 16 66 30 Q0 40 -66 30Z" fill="#000" opacity=".14" />
    </g>
  );
}

function Ball({ x, y, gold }: { x: number; y: number; gold?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="11" fill={gold ? "#f2c230" : "#d7f23c"} stroke={INK} strokeOpacity=".35" strokeWidth="1.5" />
      <path d="M-9 -5 Q0 2 -5 10 M9 5 Q0 -2 5 -10" fill="none" stroke="#fff" strokeWidth="1.6" opacity=".9" />
    </g>
  );
}

function Court({ floor = "#2f66c8", net, side }: { floor?: string; net?: boolean; side?: boolean }) {
  return (
    <g>
      <defs>
        <pattern id="art-mesh" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0H7M0 0V7" stroke="#000" strokeOpacity=".3" strokeWidth="1" fill="none" />
        </pattern>
        <pattern id="art-fence" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 0H16M0 0V16" stroke="#1f3b33" strokeOpacity=".55" strokeWidth="1.4" fill="none" />
        </pattern>
        <pattern id="art-net" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 0H10M0 0V10" stroke="#fff" strokeOpacity=".55" strokeWidth="1.2" fill="none" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="#f1e6cf" />
      <circle cx="318" cy="64" r="38" fill="#f7b23b" opacity=".9" />
      {/* grillage et vitres du fond */}
      <rect y="46" width="400" height="74" fill="url(#art-fence)" />
      <rect y="120" width="400" height="140" fill="#bcd9e2" />
      <path d="M40 120 L100 260 M150 120 L190 260 M300 120 L330 260" stroke="#fff" strokeWidth="10" opacity=".35" />
      {[0, 133, 267, 400].map((x) => (
        <rect key={x} x={x - 4} y="46" width="8" height="214" fill="#16382e" />
      ))}
      <rect y="116" width="400" height="7" fill="#16382e" />
      {/* piste */}
      <rect y="258" width="400" height="142" fill={floor} />
      <rect y="268" width="400" height="5" fill="#fff" opacity=".9" />
      <rect x="197" y="268" width="6" height="132" fill="#fff" opacity=".9" />
      {side && (
        <g>
          <path d="M330 20 H400 V400 H352Z" fill="#bcd9e2" />
          <path d="M330 20 H400 V150 H337Z" fill="#f1e6cf" />
          <path d="M330 20 H400 V150 H337Z" fill="url(#art-fence)" />
          <path d="M326 16 H400 V26 H326Z M333 146 H400 V154 H333Z" fill="#16382e" />
          <path d="M326 16 L350 400 H360 L336 16Z" fill="#16382e" />
        </g>
      )}
      {net && (
        <g>
          <rect y="346" width="400" height="54" fill="#12201a" opacity=".55" />
          <rect y="346" width="400" height="54" fill="url(#art-net)" />
          <rect y="340" width="400" height="9" fill="#fff" />
        </g>
      )}
    </g>
  );
}

const shadow = (x: number, w = 70) => <ellipse cx={x} cy="334" rx={w} ry="9" fill="#000" opacity=".22" />;

const scenes: Record<string, { label: string; draw: (cap: CapColors, code: string) => React.ReactNode }> = {
  "la-bandeja": {
    label: "Un joueur portant la casquette La Bandeja frappe une bandeja au filet",
    draw: (cap, code) => (
      <>
        <Court net />
        {shadow(185)}
        <g transform="translate(185 122)">
          <Player cap={cap} code={code} skin="#f0c9a0" jacket="#e8e2d2" pants="#0e3b2c" hair="short" armL={150} armR={128} racketAngle={-62} racket="#0e3b2c" look={[5, -6]} mouth="flat" />
        </g>
        <path d="M352 96 Q330 120 312 150" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity=".55" />
        <Ball x={306} y={160} />
      </>
    ),
  },
  "la-vibora": {
    label: "Une joueuse portant la casquette La Víbora frappe une víbora",
    draw: (cap, code) => (
      <>
        <Court net floor="#2a7a5a" />
        {shadow(190)}
        <g transform="translate(190 122) rotate(-7 0 200)">
          <Player cap={cap} code={code} skin="#c98e62" jacket="#161616" pants="#d7f23c" hair="pony" hairColor="#1d1410" armL={38} armR={104} racketAngle={-24} racket="#d7f23c" look={[6, 2]} mouth="grin" brows />
        </g>
        <path d="M318 176 C344 170 322 204 348 206 C372 208 352 240 372 250" fill="none" stroke="#d7f23c" strokeWidth="7" strokeLinecap="round" />
        <path d="M318 176 C344 170 322 204 348 206 C372 208 352 240 372 250" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" opacity=".5" />
        <Ball x={376} y={258} />
      </>
    ),
  },
  "por-tres": {
    label: "Un joueur portant la casquette Por Tres smashe et sort la balle de la piste",
    draw: (cap, code) => (
      <>
        <Court side />
        {shadow(170, 54)}
        <path d="M282 86 L262 318 Q300 150 376 40" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" opacity=".6" />
        <path d="M250 322 l12 -8 12 8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <g transform="translate(170 86)">
          <Player cap={cap} code={code} skin="#8d5a3b" jacket="#f7f5ef" pants="#1e4bd2" hair="beard" hairColor="#2b1b12" armL={62} armR={146} racketAngle={-20} racket="#f26a1b" look={[4, -7]} mouth="open" brows tuck />
        </g>
        <Ball x={372} y={46} />
        <path d="M356 30 l-10 -10 M380 24 l2 -14 M392 44 l12 -4" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
      </>
    ),
  },
  "punto-de-oro": {
    label: "Une joueuse portant la casquette Punto de Oro s'apprête à jouer le point en or",
    draw: (cap, code) => (
      <>
        <Court floor="#2f66c8" />
        <g transform="translate(22 132)">
          <rect width="104" height="58" rx="8" fill="#12201a" />
          <text x="28" y="40" textAnchor="middle" fontFamily="var(--sans)" fontWeight="700" fontSize="28" fill="#f2c230">40</text>
          <text x="76" y="40" textAnchor="middle" fontFamily="var(--sans)" fontWeight="700" fontSize="28" fill="#f2c230">40</text>
          <rect x="51" y="10" width="2" height="38" fill="#f1e6cf" opacity=".5" />
        </g>
        {shadow(215)}
        <g transform="translate(215 122)">
          <Player cap={cap} code={code} skin="#f3d2b3" jacket="#b58e33" pants="#12201a" hair="bob" hairColor="#b5482a" armL={132} armR={34} racketAngle={-18} racket="#12201a" look={[-6, -4]} mouth="smile" brows />
        </g>
        <Ball x={92} y={86} gold />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <path key={a} d="M0 -18 V-28" stroke="#f2c230" strokeWidth="3.5" strokeLinecap="round" transform={`translate(92 86) rotate(${a})`} />
        ))}
      </>
    ),
  },
  "la-chiquita": {
    label: "Un joueur portant la casquette La Chiquita joue une balle courte au ras du filet",
    draw: (cap, code) => (
      <>
        <Court net floor="#2a7a5a" />
        {shadow(160)}
        <g transform="translate(160 138)">
          <Player cap={cap} code={code} skin="#e3b58c" jacket="#f4efe4" pants="#9e4423" hair="short" hairColor="#8a8a8a" armL={30} armR={58} racketAngle={-30} racket="#c8623a" look={[7, 6]} mouth="smile" crouch />
        </g>
        <path d="M262 286 Q310 262 344 316" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity=".6" />
        <Ball x={346} y={322} />
      </>
    ),
  },
};

export function ShotArt({ slug }: { slug: string }) {
  const p = getProduct(slug);
  const scene = scenes[slug];
  if (!p || !scene) return null;
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={scene.label} className="shot-art">
      {scene.draw(p.colors, p.code)}
    </svg>
  );
}
