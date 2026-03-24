import { AlertTriangle, BarChart2, Scale, Layers } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Caos de datos en etapa de crecimiento",
    description:
      "El crecimiento rápido genera datos desorganizados, sin dueños claros, sin estructura y sin estándares. Lo que funciona en el MVP ya no escala.",
  },
  {
    icon: Scale,
    title: "Falta de trazabilidad",
    description:
      "Sin linaje de datos es imposible saber de dónde viene un número o por qué cambió. Los errores se vuelven invisibles hasta que es demasiado tarde.",
  },
  {
    icon: AlertTriangle,
    title: "Riesgos regulatorios",
    description:
      "Las fintech operan bajo regulaciones como la Ley 1581 de Protección de Datos en Colombia. Sin gobierno de datos, cada auditoría es una amenaza real.",
  },
  {
    icon: BarChart2,
    title: "Decisiones sin respaldo",
    description:
      "Los líderes toman decisiones con datos que nadie confía. Informes contradictorios, métricas inconsistentes, KPIs que nadie puede defender.",
  },
]

const impacts = [
  { metric: "Pérdida de eficiencia operativa", color: "text-red-400" },
  { metric: "Riesgo de sanciones regulatorias", color: "text-orange-400" },
  { metric: "Decisiones basadas en datos incorrectos", color: "text-yellow-400" },
]

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            El problema
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
              El desorden de datos no llega de golpe. Llega mientras crecés.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Las startups fintech priorizan (con razón) la velocidad. Pero sin una base de datos sólida desde el día 1, cada mes que pasa acumula deuda técnica y deuda regulatoria que luego cuesta más resolver.
            </p>

            {/* Impact list */}
            <div className="flex flex-col gap-3">
              {impacts.map((item) => (
                <div key={item.metric} className="flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace("text-", "bg-")}`} />
                  <span className={`text-sm font-medium ${item.color}`}>{item.metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Problem cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <div
                  key={problem.title}
                  className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-300 group"
                >
                  <div className="mb-3 w-9 h-9 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">{problem.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
