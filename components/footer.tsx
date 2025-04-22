import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">SteadAI</h3>
            <p className="text-sm text-slate-300">
              Expert services in Artificial Intelligence, Machine Learning, Data Science, and Data Engineering.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-white">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/105155654/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.upwork.com/agencies/919949921598672896/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-bold"
              >
                Upwork
              </Link>
            </div>
            <p className="text-sm text-slate-300">
              <Link href="/consultation" className="hover:text-white">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} SteadAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
