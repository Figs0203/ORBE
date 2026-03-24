import Link from "next/link"
import { ArrowRight } from "lucide-react"

const advantages = [
  {
    number: "01",
    title: "Especializados en fintech",
    description:
      "No somos generalistas. Conocemos las particularidades del dato en pagos, crédito, seguros y billeteras digitales. Hablamos el lenguaje de tu industria.",
  },
  {
    number: "02",
    title: "Enfocados en etapa temprana",
    description:
      "Entendemos que en early-stage los recursos son limitados y la velocidad importa. Nuestros programas están calibrados para equipos pequeños con grandes ambiciones.",
  },
  {
    number: "03",
    title: "Implementación en semanas, no meses",
    description:
      "Mientras las consultoras tradicionales llegan con proyectos de 6 meses, nosotros entregamos resultados tangibles en 4 a 6 semanas.",
  },
  {
    number: "04",
    title: "Alternativa a consultoras tradicionales",
    description:
      "Sin contratos corporativos, sin procesos lentos, sin consultores genéricos. ORBE trabaja como un socio estratégico de tu equipo de datos.",
  },
]

export default function WhyOrbe() {
  return (
    <section className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Por qué ORBE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance max-w-xl">
            Una forma diferente de construir gobernanza de datos
          </h2>
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity shrink-0"
          >
            Hablemos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Advantage grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
              <span className="text-3xl font-bold text-primary/20 font-mono group-hover:text-primary/40 transition-colors duration-300">
                {adv.number}
              </span>
              <h3 className="text-sm font-bold text-foreground leading-snug">{adv.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 p-8 rounded-xl border border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 text-balance">
              ¿Listo para construir sobre bases sólidas?
            </h3>
            <p className="text-sm text-muted-foreground">
              Agenda una consulta sin costo. Te contamos cómo ORBE puede ayudar a tu fintech.
            </p>
          </div>
          <Link
            href="#contacto"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 orbe-glow"
          >
            Agendar consulta gratuita
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}
