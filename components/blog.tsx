import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"

const posts = [
  {
    tag: "Gobernanza",
    readTime: "6 min",
    title: "Por qué las fintech fallan sin gobernanza de datos",
    excerpt:
      "La falta de gobernanza de datos no es un problema técnico, es un problema de negocio. Exploramos cómo afecta el crecimiento, el cumplimiento regulatorio y la escalabilidad de las startups fintech en Latinoamérica.",
    date: "Marzo 2025",
    href: "#",
  },
  {
    tag: "Regulación",
    readTime: "4 min",
    title: "Ley 1581 y protección de datos: lo que tu fintech necesita saber",
    excerpt:
      "Un recorrido práctico por los requisitos de la Ley de Protección de Datos en Colombia y cómo prepararlos sin frenar el desarrollo de tu producto.",
    date: "Febrero 2025",
    href: "#",
  },
  {
    tag: "DataOps",
    readTime: "5 min",
    title: "El costo oculto de los datos desordenados en etapa temprana",
    excerpt:
      "Cada mes sin gobierno de datos acumula deuda técnica y deuda regulatoria. Te mostramos cómo calcularlo y por qué actuar antes es siempre más barato.",
    date: "Enero 2025",
    href: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Blog / Recursos
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Perspectivas sobre datos y fintech
          </h2>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity shrink-0"
          >
            Ver todos los artículos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group flex flex-col rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                index === 0 ? "ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Top accent */}
              <div className={`h-0.5 w-full ${index === 0 ? "bg-primary" : "bg-transparent group-hover:bg-primary/40 transition-colors duration-300"}`} />

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                    <Tag size={10} />
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link
                    href={post.href}
                    className="group/link inline-flex items-center gap-1 text-xs text-primary font-medium hover:opacity-80 transition-opacity"
                  >
                    Leer más
                    <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
