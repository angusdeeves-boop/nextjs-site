"use client"

interface FinalCtaSectionProps {
  onContactClick: () => void
}

export function FinalCTASection({ onContactClick }: FinalCtaSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0066ff]/20 via-[#0066ff]/10 to-[#00d4ff]/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.3)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight text-white">
          Ready to Build Your Growth Engine?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto">
          Start with a £97 audit or jump straight into a full website build. Either way, you're getting a partner obsessed with your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 lg:mb-8">
          <button
            onClick={onContactClick}
            className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#0066ff]/50 hover:-translate-y-1 transition-all"
          >
            Book £97 Audit
          </button>
          <button
            onClick={onContactClick}
            className="border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 transition-all"
          >
            Schedule Strategy Call
          </button>
        </div>

        <p className="text-[#00ff88] font-semibold text-sm sm:text-base">
          30-day money-back guarantee on all projects. Zero risk.
        </p>
      </div>
    </section>
  )
}
