"use client"

import { useState } from "react"
import { Search, Settings, BarChart3, Palette, Wrench, TrendingUp, ArrowRight, Zap, Target, Rocket } from "lucide-react"

interface UpsellsSectionProps {
  onContactClick: () => void
}

const upsells = [
  {
    icon: Search,
    title: "SEO Growth Program",
    price: "£500–£2,000/mo",
    description: "AI-optimized SEO that ranks you for keywords that convert. Passive traffic that compounds.",
    features: ["Keyword strategy", "Content optimization", "Link building", "Rank tracking", "Monthly calls"],
    roi: "2-3 month payback",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-400",
    shadowColor: "hover:shadow-emerald-500/20",
  },
  {
    icon: Settings,
    title: "CRM & Automation",
    price: "£300–£1,000/mo",
    setup: "+ £1,000 setup",
    description: "Automations that convert leads 24/7. Set up once, profit forever.",
    features: ["CRM setup", "Email sequences", "SMS automation", "Lead scoring", "Custom workflows"],
    roi: "1-2 month payback",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-400",
    shadowColor: "hover:shadow-blue-500/20",
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Paid Ads Management",
    price: "£1,000–£3,000/mo",
    description: "Facebook & Google ads by growth specialists. Predictable lead generation at scale.",
    features: ["Campaign setup", "Daily optimization", "Conversion tracking", "A/B testing", "Performance reviews"],
    roi: "30-60 day payback",
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    hoverBorder: "hover:border-violet-400",
    shadowColor: "hover:shadow-violet-500/20",
  },
  {
    icon: Palette,
    title: "Premium Branding",
    price: "£2,000–£5,000",
    description: "Strategic positioning that justifies premium pricing. Complete visual system.",
    features: ["Brand strategy", "Logo & identity", "Messaging framework", "Style guide", "Brand rollout"],
    roi: "20-40% premium",
    color: "rose",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    hoverBorder: "hover:border-rose-400",
    shadowColor: "hover:shadow-rose-500/20",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    price: "£200–£500/mo",
    description: "Regular updates, security, and optimization. Peace of mind included.",
    features: ["Performance reviews", "Security updates", "Optimization", "Content updates", "Priority support"],
    roi: "Prevents downtime",
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    hoverBorder: "hover:border-amber-400",
    shadowColor: "hover:shadow-amber-500/20",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    price: "£400–£800/mo",
    description: "Advanced tracking and insights. Know exactly where every pound comes from.",
    features: ["Custom dashboards", "Conversion tracking", "Attribution modeling", "Insights reports", "Recommendations"],
    roi: "10-20% improvement",
    color: "cyan",
    gradient: "from-cyan-500 to-sky-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400",
    shadowColor: "hover:shadow-cyan-500/20",
  },
]

export function UpsellsSection({ onContactClick }: UpsellsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="upsells" className="py-20 lg:py-32 bg-[#030308] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/30 text-violet-300 font-bold uppercase tracking-[3px] text-xs px-5 py-2.5 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Growth Accelerators
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
            <span className="text-white">Add Services That</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Compound Results
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            The most successful clients combine websites with recurring growth services. 
            Multiply your results while we handle execution.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {upsells.map((upsell, index) => {
            const Icon = upsell.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={upsell.title}
                className={`
                  group relative rounded-2xl p-6 lg:p-7 transition-all duration-500 cursor-pointer
                  bg-white/[0.02] backdrop-blur-sm border ${upsell.border} ${upsell.hoverBorder}
                  hover:-translate-y-1 hover:shadow-2xl ${upsell.shadowColor}
                  ${upsell.featured ? 'md:col-span-2 lg:col-span-1 ring-1 ring-blue-500/30' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onContactClick}
              >
                {/* Featured badge */}
                {upsell.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    Most Popular
                  </div>
                )}

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${upsell.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                {/* Icon with animated background */}
                <div className={`relative w-12 h-12 rounded-xl ${upsell.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-r ${upsell.gradient} bg-clip-text`} style={{ color: upsell.color === 'emerald' ? '#10b981' : upsell.color === 'blue' ? '#3b82f6' : upsell.color === 'violet' ? '#8b5cf6' : upsell.color === 'rose' ? '#f43f5e' : upsell.color === 'amber' ? '#f59e0b' : '#06b6d4' }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                  {upsell.title}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-lg font-bold bg-gradient-to-r ${upsell.gradient} bg-clip-text text-transparent`}>
                    {upsell.price}
                  </span>
                  {upsell.setup && (
                    <span className="text-xs text-white/40">{upsell.setup}</span>
                  )}
                </div>

                <p className="text-sm text-white/50 mb-4 leading-relaxed line-clamp-2">
                  {upsell.description}
                </p>

                {/* Features - compact */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {upsell.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/5">
                      {feature}
                    </span>
                  ))}
                  {upsell.features.length > 3 && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/40">
                      +{upsell.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* ROI & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className={`text-xs font-semibold bg-gradient-to-r ${upsell.gradient} bg-clip-text text-transparent`}>
                    {upsell.roi}
                  </span>
                  <ArrowRight className={`w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Growth Partnership CTA - Premium design */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 p-[1px]">
            <div className="absolute inset-[1px] rounded-3xl bg-[#0a0a0f]" />
          </div>
          
          <div className="relative p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-400 mb-4">
                  <Rocket className="w-4 h-4" />
                  The Growth Partnership Model
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Combine Services for
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> Exponential Returns</span>
                </h3>
                <p className="text-white/60 mb-6 text-sm sm:text-base leading-relaxed">
                  Most successful clients combine <strong className="text-white">1 premium website</strong> + <strong className="text-white">2-3 recurring services</strong>. 
                  Your success becomes our success.
                </p>
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
                >
                  <Target className="w-4 h-4" />
                  Build Your Growth Stack
                </button>
              </div>

              {/* Right - Stats breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-emerald-400">3-4x</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Website alone</p>
                    <p className="text-white/40 text-xs">More leads from conversion optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-400">5-10x</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">+ SEO/Ads</p>
                    <p className="text-white/40 text-xs">More total traffic to your site</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-violet-400">2-3x</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">+ Automation</p>
                    <p className="text-white/40 text-xs">Higher conversion rate on traffic</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-emerald-400">=</span>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-bold">15-30x Overall ROI in Year 1</p>
                    <p className="text-white/50 text-xs">Combined compound effect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
