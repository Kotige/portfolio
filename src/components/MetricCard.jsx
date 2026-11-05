export default function MetricCard({ valor, legenda }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-[32px]/[1.1] font-medium tabular-nums">{valor}</p>
      <p className="mt-2 text-sm/[1.5] text-ink-muted">{legenda}</p>
    </div>
  )
}
