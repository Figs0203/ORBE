import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Agustín Figueroa Sierra",
    role: "Data Governance Consultant",
    bio: "Especialista en diseño e implementación de marcos de gobernanza de datos para empresas de servicios financieros. Con experiencia en regulación colombiana y arquitectura de datos para fintech en etapa temprana.",
    image: "/images/agustin.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Samuel Aristizabal Alzate",
    role: "Data Engineer / DataOps",
    bio: "Ingeniero de datos con enfoque en pipelines de alta disponibilidad, calidad de datos y automatización de procesos DataOps. Apasionado por construir infraestructura de datos confiable desde el primer sprint.",
    image: "/images/samuel.jpg",
    linkedin: "#",
    twitter: "#",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Equipo
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Las personas detrás de ORBE
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Dos especialistas, un objetivo: que tus datos trabajen para ti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              {/* Avatar & info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a
                  href={member.linkedin}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={member.twitter}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={`Twitter de ${member.name}`}
                >
                  <Twitter size={14} />
                  Twitter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
