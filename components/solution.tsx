import { CheckCircle2, Zap, Lock, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Gobernanza desde el día 1",
    description:
      "No esperamos a que los datos sean un problema. Construimos la estructura correcta antes de que el desorden ocurra.",
  },
  {
    icon: TrendingUp,
    title: "Diseñado para escalar",
    description:
      "Cada decisión de arquitectura y proceso está pensada para que tus sistemas aguanten el crecimiento, no que lo frenen.",
  },
  {
    icon: Lock,
    title: "Cumplimiento sin fricción",
    description:
      "Integramos cumplimiento regulatorio directamente en tus procesos de datos. Reglas claras, sin burocracia innecesaria.",
  },
]

const checkpoints = [
  "Inventario y clasificación de datos críticos",
  "Definición de dueños y responsables por dominio",
  "Pipelines con trazabilidad completa",
  "Políticas de privacidad alineadas a regulación colombiana",
  "Documentación viva y procesos auditables",
]

export default function Solution() {
  return (
    <section className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            La solución
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
              ORBE te da el control de tus datos antes de que los pierdas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              No somos una consultora tradicional que llega con un framework genérico. Nos integramos con tu equipo y construimos gobernanza de datos adaptada a tu etapa, tu industria y tus regulaciones.
            </p>

            {/* Checkpoints */}
            <div className="flex flex-col gap-3">
              {checkpoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors duration-300 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
