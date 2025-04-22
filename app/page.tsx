import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, ChevronRight, BarChart, Database, Cpu, Linkedin, Star, Award, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">SteadAI</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#why-choose-us">
            Why Choose Us
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/company/steadai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Linkedin className="h-5 w-5" />
            <span className="hidden sm:inline">Connect on LinkedIn</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white animate-fade-in">
                  Empowering Your Business with AI and Data Science
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl animate-fade-in-up">
                  SteadAI provides cutting-edge AI/ML and data science solutions to drive your business forward.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary"
                >
                  <Link href="#services">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="secondary" className="bg-white/10 text-white">
                  <Star className="h-4 w-4 mr-1" /> Top Rated on Upwork
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  <Award className="h-4 w-4 mr-1" /> Expert Solutions
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  <Users className="h-4 w-4 mr-1" /> 50+ Happy Clients
                </Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Machine Learning Solutions</h3>
                <p className="text-muted-foreground">Custom ML models tailored to your business needs.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <BarChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-muted-foreground">Turn your data into actionable insights.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Big Data Processing</h3>
                <p className="text-muted-foreground">Efficient handling and analysis of large-scale datasets.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose SteadAI
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Cutting-edge Technology</h3>
                <p className="text-muted-foreground">We leverage the latest advancements in AI and ML.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <ChevronRight className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                <p className="text-muted-foreground">Custom-built solutions to address your unique challenges.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Highly skilled professionals with deep industry knowledge.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
              <div className="flex justify-center gap-4 mb-8">
                <Link
                  href="https://www.upwork.com/freelancers/~014a4644446e5bc150?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#6FDA44] text-white rounded-md hover:bg-[#5ec934] transition-colors"
                >
                  <img
                    src="https://assets.static-upwork.com/images/favicon.ico"
                    alt="Upwork"
                    className="w-4 h-4 mr-2"
                  />
                  View Our Upwork Profile
                </Link>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "SteadAI's machine learning solutions have transformed our business processes, leading to a 30%
                  increase in efficiency."
                </p>
                <div className="font-semibold">John Doe</div>
                <div className="text-sm text-muted-foreground">CTO, Tech Innovators Inc.</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The data analytics insights provided by SteadAI have been instrumental in our strategic
                  decision-making."
                </p>
                <div className="font-semibold">Jane Smith</div>
                <div className="text-sm text-muted-foreground">CEO, Data Driven Co.</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "SteadAI's big data processing capabilities have allowed us to handle our growing data needs with
                  ease."
                </p>
                <div className="font-semibold">Alex Johnson</div>
                <div className="text-sm text-muted-foreground">Data Scientist, MegaCorp</div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Contact us today to learn how SteadAI can transform your business with AI and data science.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="email" placeholder="Enter your email" className="text-lg" />
                  <Button type="submit" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 px-4 md:px-6">
        <div className="container flex flex-col gap-4 sm:flex-row items-center">
          <p className="text-sm text-muted-foreground">© 2024 SteadAI. All rights reserved.</p>
          <nav className="sm:ml-auto flex items-center gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/steadai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

