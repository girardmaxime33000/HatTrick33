import type { CapColors } from "@/lib/products";

/** Illustration vectorielle d'une trucker vue de face. À remplacer par les photos produit. */
export function Cap({ colors, code, id, title }: { colors: CapColors; code: string; id: string; title?: string }) {
  const meshId = `mesh-${id}`;
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={title ?? `Casquette ${code}`} className="cap">
      <defs>
        <pattern id={meshId} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0H9M0 0V9" stroke="#000" strokeOpacity=".28" strokeWidth="1.2" fill="none" />
        </pattern>
        <clipPath id={`crown-${id}`}>
          <path d="M62 196C58 96 122 40 200 40s142 56 138 156Z" />
        </clipPath>
      </defs>
      <ellipse cx="200" cy="262" rx="150" ry="12" fill="#000" opacity=".12" />
      {/* calotte filet */}
      <path d="M62 196C58 96 122 40 200 40s142 56 138 156Z" fill={colors.mesh} />
      <path d="M62 196C58 96 122 40 200 40s142 56 138 156Z" fill={`url(#${meshId})`} />
      {/* façade mousse */}
      <g clipPath={`url(#crown-${id})`}>
        <path d="M112 200C104 110 150 46 200 44c50 2 96 66 88 156Z" fill={colors.panel} />
        <path d="M112 200C104 110 150 46 200 44c50 2 96 66 88 156Z" fill="none" stroke="#000" strokeOpacity=".18" strokeWidth="1.5" />
      </g>
      <circle cx="200" cy="41" r="7" fill={colors.visor} />
      {/* visière */}
      <path d="M52 192c44-16 252-16 296 0 12 34-40 62-148 64C92 254 40 226 52 192Z" fill={colors.visor} />
      <path d="M52 192c44-16 252-16 296 0-40 14-256 14-296 0Z" fill="#000" opacity=".16" />
      <path d="M78 226c40 16 204 16 244 0" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.5" strokeDasharray="5 5" />
      {/* écusson */}
      <rect x="150" y="98" width="100" height="62" rx="10" fill={colors.patch} />
      <rect x="155" y="103" width="90" height="52" rx="7" fill="none" stroke={colors.patchInk} strokeOpacity=".5" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="200" y="134" textAnchor="middle" fontFamily="var(--display)" fontStyle="italic" fontWeight="700" fontSize="26" fill={colors.patchInk}>
        {code}
      </text>
      <text x="200" y="148" textAnchor="middle" fontFamily="var(--sans)" fontWeight="600" fontSize="7.5" letterSpacing="2" fill={colors.patchInk}>
        HAT-TRICK33
      </text>
    </svg>
  );
}
