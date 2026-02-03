"use client"

import { useState } from "react"
import { TrendingDown, TrendingUp, Zap, Target, ArrowRight, AlertTriangle } from "lucide-react"

const transformations = [
  {
    id: 1,
    beforeIcon: TrendingDown,
    afterIcon: TrendingUp,
    beforeStat: "2.1%",
    afterStat: "8.4%",
    metric: "Conversion Rate",
    beforeLabel: "Industry Avg",
    afterLabel: "Our Clients",
    description: "Strategic UX design and conversion psychology that turns browsers into buyers.",
    color: "emerald",
    multiplier: "4x",
  },
  {
    id: 2,
    beforeIcon: TrendingDown,
    afterIcon: Zap,
    beforeStat: "4.2s",
    afterStat: "1.8s",
    metric: "Page Load Speed",
    beforeLabel: "Typical Sites",
    afterLabel: "Our Builds",
    description: "Lightning-fast performance that keeps visitors engaged and improves SEO rankings.",
    color: "cyan",
    multiplier: "2.3x",
  },
  {
    id: 3,
    beforeIcon: TrendingDown,
    afterIcon: Target,
    beforeStat: "12%",
    afterStat: "67%",
    metric: "Lead Capture",
    beforeLabel: "No Strategy",
    afterLabel: "Our Funnels",
    description: "Data-driven lead magnets and CTAs positioned for maximum engagement.",
    color: "violet",
    multiplier: "5.6x",
  },
]

export function PainSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="pain" className="relative py-24 lg:py-32 overflow-hidden bg-[#030308]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-500/6 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            Critical Issue
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight font-[var(--font-display)]" style={{ fontFamily: 'var(--font-orbitron), Orbitron, sans-serif' }}>
            Your Website Is
            <span className="block mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Leaking Revenue
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Most websites convert at less than 3%. That means{" "}
            <span className="text-white font-semibold">97% of your traffic leaves</span>{" "}
            without taking action.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((item, index) => {
            const isActive = activeCard === item.id
            const colorClasses = {
              emerald: {
                gradient: "from-emerald-500/20 to-transparent",
                border: "border-emerald-500/40",
                glow: "shadow-emerald-500/30",
                text: "text-emerald-400",
                bg: "bg-emerald-500",
              },
              cyan: {
                gradient: "from-cyan-500/20 to-transparent",
                border: "border-cyan-500/40",
                glow: "shadow-cyan-500/30",
                text: "text-cyan-400",
                bg: "bg-cyan-500",
              },
              violet: {
                gradient: "from-violet-500/20 to-transparent",
                border: "border-violet-500/40",
                glow: "shadow-violet-500/30",
                text: "text-violet-400",
                bg: "bg-violet-500",
              },
            }[item.color]

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive 
                    ? `bg-gradient-to-b ${colorClasses.gradient} ${colorClasses.border} shadow-xl ${colorClasses.glow}` 
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Multiplier badge */}
                <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive 
                    ? `${colorClasses.bg} text-white` 
                    : "bg-white/10 text-white/50"
                }`}>
                  {item.multiplier} Better
                </div>

                {/* Card content */}
                <div className="p-6">
                  {/* Metric label */}
                  <div className="mb-6">
                    <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? colorClasses.text : "text-white/40"}`}>
                      {item.metric}
                    </span>
                  </div>

                  {/* Before/After comparison */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* Before */}
                    <div className="flex-1 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/15 border border-red-500/25 mb-3">
                        <item.beforeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">{item.beforeStat}</div>
                      <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wide font-medium">{item.beforeLabel}</div>
                    </div>

                    {/* Arrow */}
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-8 sm:w-12 h-0.5 rounded-full transition-all duration-300 ${isActive ? colorClasses.bg : "bg-white/15"}`} />
                      <ArrowRight className={`w-5 h-5 transition-colors duration-300 ${isActive ? colorClasses.text : "text-white/20"}`} />
                    </div>

                    {/* After */}
                    <div className="flex-1 text-center">
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border mb-3 transition-all duration-300 ${
                        isActive ? `${colorClasses.bg}/20 ${colorClasses.border}` : "bg-white/5 border-white/10"
                      }`}>
                        <item.afterIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isActive ? colorClasses.text : "text-white/40"}`} />
                      </div>
                      <div className={`text-2xl sm:text-3xl font-black mb-1 transition-colors duration-300 ${isActive ? colorClasses.text : "text-white"}`}>
                        {item.afterStat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wide font-medium">{item.afterLabel}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-white/80" : "text-white/40"}`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                  isActive ? colorClasses.bg : "bg-transparent"
                }`} />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
            <p className="text-white/70 text-sm">
              Ready to stop the leak?
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
