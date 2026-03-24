import { Target, Eye, Compass, Users } from "lucide-react"

const aboutItems = [
  {
    icon: Users,
    label: "Quiénes somos",
    content:
      "Somos una consultora enfocada en ayudar a startups fintech a crecer con bases sólidas de datos desde el inicio. Trabajamos directamente con fundadores y equipos técnicos para construir gobernanza de datos real, no teórica.",
  },
  {
    icon: Target,
    label: "Misión",
    content:
      "Ayudar a empresas a escalar mediante una gobernanza de datos eficiente y práctica.",
  },
  {
    icon: Eye,
    label: "Visión",
    content:
      "Ser una consultora líder en gobernanza de datos para fintech en Latinoamérica.",
  },
  {
    icon: Compass,
    label: "Propósito",
    content: "Evitar el caos de datos antes de que ocurra.",
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Nosotros
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
              Una consultora construida para fintech en Latinoamérica
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Nacimos en Colombia con el objetivo de resolver un problema concreto: las startups fintech de la región crecen rápido pero sin los cimientos de datos necesarios para sostener ese crecimiento. Conocemos el ecosistema, la regulación local y las presiones operativas de equipos pequeños.
            </p>
          </div>
        </div>

        {/* About cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300 group flex flex-col gap-4"
              >
                <div className="w-9 h-9 rounded-md flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
