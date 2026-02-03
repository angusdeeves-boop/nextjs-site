"use client"

import { Target, Rocket, Crown } from "lucide-react"

interface ServicesSectionProps {
  onContactClick: () => void
}

const services = [
  {
    icon: Target,
    title: "Essential Website",
    price: "£5,000",
    description:
      "Clean, professional website that turns visitors into leads. Mobile-optimized, lightning-fast, and built to convert from day one.",
    features: [
      "5-7 conversion-focused pages",
      "Mobile-first responsive design",
      "Speed optimization (<2 second load time)",
      "Lead capture forms integrated",
      "Analytics & tracking setup",
      "Basic SEO foundation included",
      "4-6 week delivery timeline",
    ],
  },
  {
    icon: Rocket,
    title: "Premium Website",
    price: "£10,000",
    description:
      "Advanced conversion machine with custom functionality. Strategic design, premium positioning, and architecture built for serious growth.",
    features: [
      "8-12 pages with advanced funnels",
      "Custom animations & micro-interactions",
      "Advanced performance optimization",
      "Multi-step lead capture flows",
      "Comprehensive SEO architecture",
      "CRM integration ready",
      "Premium support (90 days)",
    ],
    featured: true,
  },
  {
    icon: Crown,
    title: "Custom Website Build",
    price: "From £15,000",
    description:
      "Fully bespoke digital platform tailored to your exact specifications. Unlimited pages, custom features, and enterprise-grade architecture.",
    features: [
      "Unlimited pages & custom features",
      "Complex functionality & integrations",
      "Bespoke design system",
      "Advanced user dashboards",
      "API development & third-party connections",
      "White-glove service & dedicated support",
      "8-12 week delivery with milestone reviews",
    ],
  },
]

export function ServicesSection({ onContactClick }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-[#000a1e] to-[#000514] overflow-hidden">
      {/* Background pulse */}
      <div className="absolute inset-[-50%] bg-[radial-gradient(circle,rgba(0,102,255,0.12)_0%,transparent_70%)] animate-pulse-custom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Premium Websites
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight gradient-text-white-cyan">
            Conversion-Optimized Website Systems
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
            Professional websites built for growth. Starting at £5k. Add growth services for exponential returns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-450 overflow-hidden ${
                service.featured
                  ? "bg-gradient-to-br from-[#0066ff]/15 to-[#0066ff]/5 border-2 border-[#0066ff]/70 shadow-2xl shadow-[#0066ff]/40 scale-105 hover:scale-[1.08]"
                  : "bg-gradient-to-br from-[#0a1428]/95 to-[#050a19]/98 border border-[#0066ff]/25 shadow-xl hover:shadow-2xl hover:shadow-[#0066ff]/35 hover:-translate-y-2.5"
              } hover:border-[#0066ff]/60`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-[-2px] rounded-[inherit] bg-gradient-to-br from-[#0066ff] via-[#00d4ff] to-[#00ff88] opacity-0 transition-opacity duration-450 hover:opacity-100 pointer-events-none -z-10" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude" }} />

              {service.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <service.icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-4 lg:mb-6 ${service.featured ? "text-[#00d4ff]" : "text-[#0066ff]"}`} />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 lg:mb-4">{service.price}</p>
              <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base leading-relaxed">{service.description}</p>

              <ul className="space-y-2 sm:space-y-3 mb-6 lg:mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="text-[#00ff88] font-bold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onContactClick}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all ${
                  service.featured
                    ? "bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/50"
                    : "border-2 border-[#0066ff]/50 text-white hover:bg-[#0066ff]/10 hover:border-[#0066ff]"
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-12 lg:mt-16 text-center p-6 lg:p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
            <strong className="text-white">Every website includes:</strong> Mobile optimization, speed optimization, analytics integration, lead capture systems, training documentation, and 30-day post-launch support.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Ready to amplify results? Add recurring growth services below to turn your website into a complete revenue engine.
          </p>
        </div>
      </div>
    </section>
  )
}
