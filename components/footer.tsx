"use client"

import Link from "next/link"

interface FooterProps {
  onContactClick: () => void
}

export function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-black gradient-text mb-4 block">
              CYBERTIZE
            </Link>
            <p className="text-gray-400 text-sm sm:text-base">Growth engines, not just websites.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#what-we-do" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="#upsells" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Growth Services
                </Link>
              </li>
              <li>
                <Link href="#audit" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  £97 Audit
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Our Approach
                </Link>
              </li>
              <li>
                <button onClick={onContactClick} className="text-gray-400 hover:text-[#0066ff] transition-colors text-sm sm:text-base">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm sm:text-base">hello@cybertize.uk</p>
            <p className="text-gray-400 text-sm sm:text-base">Based in UK</p>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Cybertize. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-600 text-xs">Registered in England & Wales</p>
        </div>
      </div>
    </footer>
  )
}
