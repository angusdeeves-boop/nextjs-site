"use client"

const principles = [
  {
    number: "01",
    title: "Data-Driven Design",
    text: "Every design decision backed by conversion research, heatmap analysis, and A/B testing insights from 100+ analyzed websites.",
  },
  {
    number: "02",
    title: "Sales Psychology Integration",
    text: "Strategic use of social proof, urgency, authority, and reciprocity to naturally guide visitors toward conversion actions.",
  },
  {
    number: "03",
    title: "Speed as a Feature",
    text: "Lightning-fast performance (<2s load time) improves both user experience and SEO rankings, directly increasing conversion rates.",
  },
  {
    number: "04",
    title: "Mobile-First Execution",
    text: "70% of traffic is mobile. We design for mobile first, then enhance for desktop—ensuring seamless experience everywhere.",
  },
  {
    number: "05",
    title: "Automation Integration",
    text: "Built-in automation capabilities ensure leads are captured, nurtured, and converted 24/7 without manual intervention.",
  },
  {
    number: "06",
    title: "Continuous Optimization",
    text: "Launch is just the beginning. We build systems designed for ongoing testing, refinement, and performance improvement.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Why Clients Win With Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight gradient-text-white-cyan">
            Our 6-Pillar Success Methodology
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
            The framework behind every successful project. No guesswork—just proven principles.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-[#0066ff]/50 hover:bg-[#0066ff]/5 hover:shadow-xl hover:shadow-[#0066ff]/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-4 lg:mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {principle.number}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
