export function Stars({ value, label }: { value: number; label?: string }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className="stars" role="img" aria-label={label ?? `${value.toFixed(1).replace(".", ",")} sur 5`}>
      <span aria-hidden="true">★★★★★</span>
      <span aria-hidden="true" className="stars-fill" style={{ width: `${pct}%` }}>
        ★★★★★
      </span>
    </span>
  );
}
