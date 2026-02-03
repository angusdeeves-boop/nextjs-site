"use client"

const trustCards = [
  {
    title: "100% Custom-Built Stack",
    items: [
      "Next.js 15 + React 19 (hand-coded)",
      "TypeScript for type-safe development",
      "Vercel Edge deployment",
      "Custom headless CMS solutions",
      "Supabase / PostgreSQL databases",
      "No templates, no page builders",
    ],
  },
  {
    title: "Methodologies We Follow",
    items: [
      "Mobile-first responsive design",
      "Core Web Vitals optimization",
      "Behavioral psychology frameworks",
      "AIDA & PAS copywriting models",
      "Continuous A/B testing",
    ],
  },
  {
    title: "Metrics We Optimize For",
    items: [
      "Conversion rate (visitors to leads)",
      "Page speed (target: <2 seconds)",
      "Bounce rate reduction",
      "Time on page increase",
      "Form completion rates",
      "Revenue per visitor (RPV)",
    ],
  },
  {
    title: "Risk Reversal Guarantees",
    items: [
      "No long-term contracts required",
      "Milestone-based payments",
      "Audit with money-back guarantee",
      "Cancel recurring services anytime (30 days notice)",
      "30-day post-launch support included",
    ],
  },
]

export function TrustSignalsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0066ff]/[0.03] to-[#0066ff]/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight gradient-text-white-cyan">
            Objective Trust Signals
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
            The platforms, methodologies, and metrics that power our systems.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-[#0066ff] hover:bg-[#0066ff]/5"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 lg:mb-6">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    <span className="text-[#0066ff] font-bold mt-0.5">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
