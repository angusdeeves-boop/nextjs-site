"use client"

import { Search, BarChart3, Lightbulb } from "lucide-react"

interface AuditSectionProps {
  onContactClick: () => void
}

export function AuditSection({ onContactClick }: AuditSectionProps) {
  return (
    <section id="audit" className="relative bg-[#0066ff]/15 border-y border-[#0066ff]/30 py-16 lg:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block bg-[#00ff88]/15 border border-[#00ff88]/30 text-[#00ff88] px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 lg:mb-6">
          Risk-Free Entry Point
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6 tracking-tight gradient-text">
          Start Small: £97 Website Audit
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 leading-relaxed">
          See exactly what's bleeding leads on your site. Detailed conversion audit + 15-min strategy call.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-8 lg:mb-12">
          <div className="text-center">
            <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#0066ff] mx-auto mb-3" />
            <p className="text-white font-semibold text-sm sm:text-base">Full conversion leak analysis</p>
          </div>
          <div className="text-center">
            <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-[#00d4ff] mx-auto mb-3" />
            <p className="text-white font-semibold text-sm sm:text-base">Performance report</p>
          </div>
          <div className="text-center">
            <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3" />
            <p className="text-white font-semibold text-sm sm:text-base">15-min strategy session</p>
          </div>
        </div>

        <button
          onClick={onContactClick}
          className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-black text-lg sm:text-xl hover:shadow-2xl hover:shadow-[#0066ff]/50 hover:-translate-y-1 transition-all"
        >
          Book My £97 Audit →
        </button>
        <p className="mt-4 lg:mt-6 text-[#00ff88] font-semibold text-sm sm:text-base">
          Money-back guarantee if we don't find 3+ conversion leaks
        </p>
      </div>
    </section>
  )
}
