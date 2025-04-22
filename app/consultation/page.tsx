import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ConsultationForm from "@/components/consultation-form"

export default function ConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Consultation Header Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Consultation</h1>
          <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl/relaxed mt-4">
            Schedule a free consultation with our experts to discuss your AI and data needs.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">How We Can Help</h2>
              <p className="text-slate-500 md:text-lg">
                Our team of experts is ready to help you leverage AI and data solutions to drive your business forward.
              </p>
              <div className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Strategy Consultation</CardTitle>
                    <CardDescription>Get expert advice on implementing AI in your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">
                      Our experts will help you identify opportunities for AI implementation in your business and
                      develop a strategic roadmap.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Data Assessment</CardTitle>
                    <CardDescription>Evaluate your current data infrastructure and capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">
                      We'll analyze your existing data systems and provide recommendations for improvements to support
                      your AI and analytics goals.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Custom Solution Design</CardTitle>
                    <CardDescription>Tailored AI and data solutions for your specific needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">
                      Our team will design custom AI, ML, and data solutions specifically tailored to address your
                      business challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Request Your Free Consultation</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ConsultationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-lg mt-4">
              Find answers to common questions about our consultation process
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What happens during the consultation?</h3>
              <p className="text-slate-500">
                During the consultation, our experts will discuss your business needs, current challenges, and goals.
                We'll explore how AI and data solutions can help you achieve those goals and outline potential
                approaches.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">How long does the consultation last?</h3>
              <p className="text-slate-500">
                Initial consultations typically last 30-45 minutes, depending on the complexity of your needs. We can
                schedule follow-up sessions if needed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Is the consultation really free?</h3>
              <p className="text-slate-500">
                Yes, the initial consultation is completely free with no obligation. We believe in providing value
                upfront and helping you understand how our services can benefit your business.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">What should I prepare for the consultation?</h3>
              <p className="text-slate-500">
                It's helpful to have a basic understanding of your current challenges and goals. Any information about
                your existing data infrastructure or previous AI initiatives is also valuable, but not required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
