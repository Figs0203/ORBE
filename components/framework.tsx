import { Box, GitBranch, ShieldCheck } from "lucide-react"

const pillars = [
  {
    number: "01",
    icon: Box,
    name: "Base",
    subtitle: "Fundamentos sólidos",
    description:
      "Definición de datos críticos, estructura y responsables. Construimos el inventario de activos de datos, clasificamos su sensibilidad y establecemos dueños claros por dominio.",
    items: [
      "Catálogo de datos",
      "Clasificación y sensibilidad",
      "Dueños por dominio",
      "Glosario de negocio",
    ],
  },
  {
    number: "02",
    icon: GitBranch,
    name: "Flujo",
    subtitle: "Datos en movimiento",
    description:
      "Pipelines, linaje y calidad de datos. Diseñamos y documentamos cómo los datos se mueven entre sistemas, con trazabilidad completa y controles de calidad en cada etapa.",
    items: [
      "Linaje de datos end-to-end",
      "Pipelines auditables",
      "Monitoreo de calidad",
      "Gestión de incidentes de datos",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    name: "Control",
    subtitle: "Cumplimiento y auditoría",
    description:
      "Políticas, cumplimiento y auditoría. Implementamos las políticas y controles que garantizan el cumplimiento regulatorio y la preparación ante cualquier auditoría.",
    items: [
      "Políticas de privacidad",
      "Control de accesos",
      "Registros de auditoría",
      "Preparación regulatoria",
    ],
  },
]

export default function Framework() {
  return (
    <section id="framework" className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Metodología
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-3">
              Framework ORBE
            </h2>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Tres pilares interconectados que forman la base de una gobernanza de datos efectiva para fintech.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.name}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
              >
                {/* Number & divider */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-primary font-semibold tracking-widest">
                    {pillar.number}
                  </span>
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon size={16} className="text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{pillar.name}</h3>
                <p className="text-xs text-primary font-medium mb-4">{pillar.subtitle}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>

                <div className="border-t border-border pt-4 flex flex-col gap-2">
                  {pillar.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting line (hidden on mobile, on last item) */}
                {index < pillars.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-primary/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
