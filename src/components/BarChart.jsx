// Gráfico de barras simples feito com divs.
// Barras em tom neutro, só o achado principal em ocre (highlight) e a média tracejada.
export default function BarChart({ titulo, descricao, dados, media, formatar = (v) => v, nota }) {
  const maximo = Math.max(...dados.map((d) => d.valor), media ?? 0) * 1.1
  const altura = (v) => `${(v / maximo) * 100}%`

  return (
    <figure className="my-6 rounded-xl border border-border bg-card p-5">
      <figcaption className="mb-4">
        <p className="font-medium">{titulo}</p>
        {nota && <p className="mt-1 text-sm text-ink-muted">{nota}</p>}
      </figcaption>

      <div role="img" aria-label={descricao}>
        <div className="relative flex h-52 items-end gap-2 border-b border-chart-axis sm:gap-3">
          {media != null && (
            <div
              className="pointer-events-none absolute inset-x-0 border-t-2 border-dashed border-ink-muted"
              style={{ bottom: altura(media) }}
            >
              <span className="absolute right-0 -top-6 bg-card pl-1 text-sm text-ink-muted tabular-nums">
                média {formatar(media)}
              </span>
            </div>
          )}
          {dados.map((d) => (
            <div key={d.rotulo} className="flex h-full flex-1 flex-col justify-end">
              <span
                className={`relative z-10 mx-auto mb-1 bg-card px-1 text-center text-xs tabular-nums ${d.destaque ? 'font-medium text-ink' : 'text-ink-muted'}`}
              >
                {formatar(d.valor)}
              </span>
              <div
                className={`rounded-t ${d.destaque ? 'bg-highlight' : 'bg-chart-neutral'}`}
                style={{ height: altura(d.valor) }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2 sm:gap-3" aria-hidden="true">
          {dados.map((d) => (
            <span key={d.rotulo} className="flex-1 text-center text-xs text-ink-muted">
              {d.rotulo}
            </span>
          ))}
        </div>
      </div>
    </figure>
  )
}
