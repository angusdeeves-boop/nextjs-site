"use client"

import { BookOpen, Target, Zap } from "lucide-react"

interface AuthoritySectionProps {
  onContactClick: () => void
}

const authorityStats = [
  {
    icon: BookOpen,
    stat: "100+",
    text: "Websites analyzed across fitness, dental, real estate, and SaaS industries",
  },
  {
    icon: Target,
    stat: "15",
    text: "Proven conversion frameworks tested and refined for maximum performance",
  },
  {
    icon: Zap,
    stat: "3.4×",
    text: "Average conversion rate improvement using our data-driven methodologies",
  },
]

const resources = [
  {
    title: "The 7 Conversion Leaks Guide",
    description:
      "Identify exactly where your website is bleeding leads and how to fix each one systematically.",
    link: "Request Guide →",
  },
  {
    title: "Sales Psychology Breakdown",
    description:
      "The exact psychological triggers used by top-converting websites to turn browsers into buyers.",
    link: "Get Breakdown →",
  },
  {
    title: "Technical Performance Checklist",
    description:
      "Speed optimization techniques that improved Core Web Vitals scores by an average of 60%.",
    link: "Download Checklist →",
  },
]

export function AuthoritySection({ onContactClick }: AuthoritySectionProps) {
  return (
    <section id="results" className="py-20 lg:py-32 bg-[#0066ff]/[0.03] border-y border-[#0066ff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Built on Data, Not Guesswork
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight gradient-text-white-cyan">
            Research-Backed Methodology
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
            We've analyzed 100+ websites and distilled proven patterns into actionable frameworks.
          </p>
        </div>

        {/* Authority Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {authorityStats.map((item) => (
            <div
              key={item.stat}
              className="group relative bg-white/[0.02] border-2 border-[#0066ff]/30 rounded-2xl p-6 lg:p-8 text-center transition-all duration-400 hover:-translate-y-2.5 hover:border-[#0066ff] hover:shadow-2xl hover:shadow-[#0066ff]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] opacity-0 transition-opacity duration-400 group-hover:opacity-5" />
              <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#0066ff] mx-auto mb-3 lg:mb-4 relative z-10" />
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-3 lg:mb-4 relative z-10">
                {item.stat}
              </span>
              <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed relative z-10">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Free Resources */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12">
            Free Resources & Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-[#0066ff] hover:bg-[#0066ff]/5"
              >
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                  {resource.title}
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base">
                  {resource.description}
                </p>
                <button
                  onClick={onContactClick}
                  className="text-[#0066ff] font-bold text-sm sm:text-base inline-flex items-center gap-2 hover:gap-4 transition-all"
                >
                  {resource.link}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
