import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navGroups = [
  {
    label: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Equipo", href: "#equipo" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    label: "Servicios",
    links: [
      { label: "Foundation Sprint", href: "#servicios" },
      { label: "Compliance Ready", href: "#servicios" },
      { label: "DataOps Retainer", href: "#servicios" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos de uso", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/Orbe-logo.png"
                alt="ORBE Logo"
                width={90}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Gobernanza de datos para startups fintech en Latinoamérica.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn de ORBE"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                aria-label="Twitter de ORBE"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
              >
                <Twitter size={14} />
              </a>
              <a
                href="mailto:hola@orbe.co"
                aria-label="Email de ORBE"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
                {group.label}
              </span>
              <nav className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ORBE. Todos los derechos reservados. Colombia.
          </p>
          <p className="text-xs text-muted-foreground">
            hola@orbe.co
          </p>
        </div>
      </div>
    </footer>
  )
}
