import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ConsultationForm from "@/components/consultation-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Header Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl/relaxed mt-4">
            Get in touch with our team for inquiries, support, or to discuss your project needs.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="text-slate-500 md:text-lg">
                We're here to answer any questions you have about our services, pricing, or how we can help your
                business.
              </p>

              <div className="space-y-4 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Office Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500">
                      Our team works remotely, allowing us to serve clients worldwide with flexibility and efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-500">Follow us on LinkedIn for the latest updates and insights.</p>
                    <a
                      href="https://www.linkedin.com/company/105155654/admin/dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hire Us on Upwork</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-slate-500">Check out our Upwork profile with 100% job success rate.</p>
                    <a
                      href="https://www.upwork.com/agencies/919949921598672896/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      Upwork Profile
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
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
    </div>
  )
}
