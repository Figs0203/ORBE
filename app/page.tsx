import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Solution from "@/components/solution"
import Services from "@/components/services"
import Framework from "@/components/framework"
import About from "@/components/about"
import WhyOrbe from "@/components/why-orbe"
import Team from "@/components/team"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Framework />
      <About />
      <WhyOrbe />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
