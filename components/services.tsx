import Link from "next/link"
import { Rocket, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Rocket,
    badge: "Más popular",
    name: "ORBE Foundation Sprint",
    tagline: "Construye tu base de datos en 4–6 semanas",
    price: "$14M COP",
    priceNote: "pago único",
    description:
      "El punto de partida para cualquier fintech que quiera operar con datos confiables. Definimos tu arquitectura de datos, clasificamos activos críticos, establecemos dueños y creamos la documentación base.",
    features: [
      "Inventario de fuentes de datos",
      "Clasificación y sensibilidad de datos",
      "Definición de dominios y dueños",
      "Documentación de metadatos",
      "Roadmap de gobernanza personalizado",
    ],
    highlight: true,
  },
  {
    icon: ShieldCheck,
    badge: null,
    name: "ORBE Compliance Ready",
    tagline: "Prepárate para regulación y auditorías",
    price: "$12M COP",
    priceNote: "pago único",
    description:
      "Diseñado para startups que necesitan cumplir con regulaciones colombianas (Ley 1581, SFC) o que se preparan para due diligence de inversores. Dejás la auditoría lista antes de que llegue.",
    features: [
      "Mapeo de datos personales y sensibles",
      "Políticas de privacidad y retención",
      "Controles de acceso y trazabilidad",
      "Preparación para auditoría regulatoria",
      "Entrega de evidencias y documentación",
    ],
    highlight: false,
  },
  {
    icon: RefreshCw,
    badge: null,
    name: "ORBE DataOps Retainer",
    tagline: "Soporte continuo de gobernanza y calidad de datos",
    price: "desde $4M COP",
    priceNote: "por mes",
    description:
      "Para equipos que ya tienen su base construida y necesitan acompañamiento continuo: monitoreo de calidad, evolución del catálogo de datos y soporte ante incidentes o cambios regulatorios.",
    features: [
      "Monitoreo mensual de calidad de datos",
      "Actualización de catálogo de datos",
      "Soporte ante incidentes de datos",
      "Revisión de pipelines y linaje",
      "Reunión mensual de revisión estratégica",
    ],
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Servicios
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance max-w-lg">
            Programas diseñados para tu etapa de crecimiento
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Sin contratos largos. Sin metodologías genéricas. Resultados en semanas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${
                  service.highlight
                    ? "border-primary/60 bg-primary/5 orbe-glow"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {service.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-5 w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>

                {/* Name & tagline */}
                <h3 className="text-base font-bold text-foreground mb-1">{service.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{service.tagline}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-border">
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">{service.priceNote}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contacto"
                  className={`group flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    service.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  Agendar consulta
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
