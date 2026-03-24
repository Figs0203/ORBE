"use client"

import { useState } from "react"
import { Send, CheckCircle2, Mail, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Contacto
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-6">
              Construyamos juntos la base de tus datos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Agenda una consulta sin costo. En 30 minutos evaluamos tu situación actual y te contamos cómo ORBE puede ayudar a tu fintech a crecer sobre bases sólidas de datos.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:hola@orbe.co"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} className="text-primary" />
                hola@orbe.co
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn de ORBE"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Twitter de ORBE"
              >
                <Twitter size={16} />
                Twitter
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 rounded-xl border border-border bg-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">¡Mensaje enviado!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-foreground">
                      Nombre <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="px-3 py-2.5 rounded-md border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="px-3 py-2.5 rounded-md border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-foreground">
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu startup"
                    className="px-3 py-2.5 rounded-md border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">
                    Mensaje <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu empresa y tus desafíos de datos..."
                    className="px-3 py-2.5 rounded-md border border-border bg-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 disabled:opacity-60 orbe-glow"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Agendar consulta
                      <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
