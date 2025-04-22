import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforming Businesses with AI & Data Solutions
                </h1>
                <p className="max-w-[600px] text-slate-200 md:text-xl">
                  Expert services in Artificial Intelligence, Machine Learning, Data Science, and Data Engineering with
                  100% job success rate.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/consultation">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/team">
                  <Button variant="outline" className="border-slate-200 text-white hover:bg-slate-700">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/what-is-ai%20%281%29.jpg-SDDk8ysG6quMj6VP8ciAdcVUrCLuNa.jpeg"
                alt="AI Technology Visualization"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-60 w-full relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/what-is-ai%20%281%29.jpg-SDDk8ysG6quMj6VP8ciAdcVUrCLuNa.jpeg"
                    alt="Artificial Intelligence"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                <p className="text-slate-500">
                  Custom AI solutions to automate processes and enhance decision-making capabilities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-60 w-full relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ml.jpg-lLlpqcmKp7KfqIawVIocYPX4iIbur3.jpeg"
                    alt="Machine Learning"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold">Machine Learning</h3>
                <p className="text-slate-500">
                  Advanced ML models that learn from your data to predict outcomes and optimize operations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-60 w-full relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ds-ApzpYYzaZKRsdTrB5vyvx2x9XAsfnF.png"
                    alt="Data Science"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold">Data Science</h3>
                <p className="text-slate-500">
                  Extract valuable insights from your data with our comprehensive data science services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-60 w-full relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/de.jpg-rFNZmOWyM6TpKyp3o9hMgRbk54ecT4.jpeg"
                    alt="Data Engineering"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-bold">Data Engineering</h3>
                <p className="text-slate-500">
                  Build robust data pipelines and infrastructure to support your analytics and AI initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="text-slate-500 md:text-xl">
                We deliver exceptional results with a focus on quality, innovation, and client satisfaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                  <span>100% Job Success Rate on Upwork</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                  <span>Expert Team with Specialized Skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                  <span>Tailored Solutions for Your Business Needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                  <span>Transparent Communication and Process</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-cyan-500" />
                  <span>Timely Delivery and Ongoing Support</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/consultation">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Get Free Consultation</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-cyan-600">100%</h3>
                  <p className="text-slate-600">Job Success Rate</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-cyan-600">24/7</h3>
                  <p className="text-slate-600">Support Available</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-cyan-600">50+</h3>
                  <p className="text-slate-600">Completed Projects</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-cyan-600">10+</h3>
                  <p className="text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed mt-4 mb-8">
            Schedule a free consultation with our experts and discover how our AI and data solutions can drive your
            business forward.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
