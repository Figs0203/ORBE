"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Database, Shield, TrendingUp } from "lucide-react"

const stats = [
  { label: "Semanas de implementación", value: "4–6" },
  { label: "Startups fintech asesoradas", value: "12+" },
  { label: "Reducción de riesgo regulatorio", value: "∼80%" },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--orbe-blue) 1px, transparent 1px), linear-gradient(90deg, var(--orbe-blue) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.62 0.22 255 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Gobernanza de datos · Colombia · Fintech
        </div>

        {/* Main heading – Logo image */}
        <div className="animate-fade-in-up-delay-1">
          <Image
            src="/Orbe-logo.png"
            alt="ORBE"
            width={400}
            height={120}
            className="h-24 md:h-36 w-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-2 text-xl md:text-2xl font-medium text-primary text-balance">
          Fundamentos de datos para escalar fintech
        </p>

        {/* Body text */}
        <p className="animate-fade-in-up-delay-3 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          Ayudamos a startups fintech a construir desde el inicio una base sólida de gobernanza de datos, permitiéndoles escalar, cumplir regulación y operar con confianza.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="#contacto"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 orbe-glow"
          >
            Construir mi base de datos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="#servicios"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-colors duration-200"
          >
            Ver servicios
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up-delay-4 grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-border w-full max-w-lg">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground text-center leading-relaxed">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating symbol */}
      <div className="absolute left-8 top-1/3 hidden lg:block opacity-10">
        <Image src="/Orbe-simbolo.png" alt="" width={60} height={60} className="w-14 h-14 object-contain" />
      </div>
      <div className="absolute right-8 top-1/3 hidden lg:block opacity-10">
        <Image src="/Orbe-simbolo.png" alt="" width={60} height={60} className="w-14 h-14 object-contain" />
      </div>
    </section>
  )
}
