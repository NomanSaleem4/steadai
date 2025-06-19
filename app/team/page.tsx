import Link from "next/link"
import { Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Team Header Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Expert Team</h1>
          <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl/relaxed mt-4">
            Our team of specialists brings together decades of experience in AI, ML, Data Science, and Data Engineering.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 w-full relative bg-slate-200">
                  {/* Placeholder for team member photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span>Photo</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Noman Saleem</h3>
                    <p className="text-cyan-600">Co-founder & CTO</p>
                  </div>
                  <p className="text-slate-500">
                    Expert in AI and ML solutions with a proven track record of successful project deliveries.
                  </p>
                  <div className="flex space-x-4 pt-2">
                    <Link
                      href="https://www.linkedin.com/in/nomansaleem92/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <Linkedin className="h-5 w-5 mr-1" />
                      LinkedIn
                    </Link>
                    <Link
                      href="https://www.upwork.com/freelancers/~014a4644446e5bc150?mp_source=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      Upwork
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add more team members as needed - these are placeholders */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 w-full relative bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span>Photo</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Hamad Ul Qudous</h3>
                    <p className="text-cyan-600">Research Head</p>
                  </div>
                  <p className="text-slate-500">
                    Leading AI/ML research at SteadAI.
                  </p>
                  <div className="flex space-x-4 pt-2">
                    <Link href="https://www.linkedin.com/in/hamad-ulqudous-3a2a4869/" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Linkedin className="h-5 w-5 mr-1" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 w-full relative bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span>Photo</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Abdul Basit</h3>
                    <p className="text-cyan-600">Senior Mobile Developer</p>
                  </div>
                  <p className="text-slate-500">
                    Expert in building IOS Applications.
                  </p>
                  <div className="flex space-x-4 pt-2">
                    <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Linkedin className="h-5 w-5 mr-1" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed mt-4">
              The principles that guide our work and relationships with clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="m12 14 4-4" />
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-slate-500">
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-slate-500">
                We believe in open communication and transparency throughout the project lifecycle.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Trust</h3>
              <p className="text-slate-500">
                We build long-term relationships based on trust and mutual respect with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
