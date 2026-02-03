"use client"

import { ExternalLink, ArrowRight, Star } from "lucide-react"

// Featured niche cards - primary focus areas with images
const featuredNiches = [
  {
    title: "B2B Professional Services",
    subtitle: "Growth Systems for Service Firms",
    description: "UK Accountants, Financial Advisors, Business Consultants, IT Consultants, Recruitment Agencies",
    tag: "Professional Services",
    tagIcon: Star,
    url: "https://growthlabs.cybertize.uk",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    gradient: "from-[#0066ff] to-[#00d4ff]",
    borderColor: "border-[#0066ff]/30",
    borderHover: "hover:border-[#0066ff]/70",
    bgGlow: "#0066ff",
  },
  {
    title: "Recruitment Agencies",
    subtitle: "Lead Generation for Recruiters",
    description: "UK Tech, IT & Professional Recruitment Specialists - High-value clients, funnel-ready market",
    tag: "Recruitment Sector",
    tagIcon: Star,
    url: "http://elevate.cybertize.uk",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    gradient: "from-[#00ff88] to-[#00d4ff]",
    borderColor: "border-[#00ff88]/30",
    borderHover: "hover:border-[#00ff88]/70",
    bgGlow: "#00ff88",
  },
  {
    title: "UK Trades & Home Services",
    subtitle: "Digital Presence for Tradespeople",
    description: "Roofing, HVAC, Plumbing, Electrical, Construction - Local visibility that converts",
    tag: "Trade Services",
    tagIcon: Star,
    url: "http://premier-trades.cybertize.uk",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    gradient: "from-[#ff6b35] to-[#ffaa00]",
    borderColor: "border-[#ff6b35]/30",
    borderHover: "hover:border-[#ff6b35]/70",
    bgGlow: "#ff6b35",
  },
]

const portfolioItems = [
  {
    title: "Local Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    url: "https://gym.cybertize.uk",
    problem: "Poor local visibility, manual lead capture slowing growth",
    strategy: "Local SEO framework + automated booking system",
    framework: "24/7 automated lead capture and scheduling",
  },
  {
    title: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    url: "https://local-link.cybertize.uk",
    problem: "Complex product, high trial drop-off rates",
    strategy: "Simplified onboarding + progressive value reveal",
    framework: "Conversion funnel optimization system",
  },
  {
    title: "Dental Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    url: "https://dentist.cybertize.uk",
    problem: "Low online bookings, high phone dependency",
    strategy: "Trust-building positioning + instant booking",
    framework: "Premium brand positioning system",
  },
  {
    title: "Real Estate Agency",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    url: "https://real-estate.cybertize.uk",
    problem: "Generic listings, low engagement with buyers",
    strategy: "Interactive property showcase + lead magnet",
    framework: "High-engagement visual system",
  },
  {
    title: "Event Platform",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    url: "https://local-link.cybertize.uk",
    problem: "Low registration rates, last-minute signups",
    strategy: "Urgency-based funnel + social proof system",
    framework: "Early-bird conversion maximization structure",
  },
  {
    title: "Hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    url: "https://cafe.cybertize.uk",
    problem: "Phone-only reservations, missed opportunities",
    strategy: "Visual storytelling + online booking integration",
    framework: "Seamless reservation system with upsells",
  },
  {
    title: "Law Firm",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    url: "https://law-firm.cybertize.uk",
    problem: "Trust barriers, complex service explanations",
    strategy: "Authority building + simplified consultation funnel",
    framework: "Premium positioning with trust optimization",
  },
  {
    title: "Skincare Brand",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
    url: "https://lunara-skin.cybertize.uk",
    problem: "High cart abandonment, product confusion",
    strategy: "Visual education + quiz-based recommendations",
    framework: "Personalized e-commerce conversion system",
  },
  {
    title: "Influencer / Personal Brand",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    url: "https://influencer.cybertize.uk",
    problem: "Audience attention spread across platforms with no central conversion point",
    strategy: "Personal brand hub + audience monetisation funnel",
    framework: "Creator conversion system for offers, partnerships, and email capture",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/20 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-5 py-3 rounded-full mb-6 animate-badgeGlow">
            Our Strategic Approach
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            <span className="text-white">Live Framework</span>
            <br />
            <span className="gradient-text">Demonstrations</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Explore our methodology through interactive demos. Each example showcases proven conversion strategies you can apply to your business.
          </p>
        </div>

        {/* Featured Niche Cards - Premium with Images */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#0066ff]/50" />
            <span className="text-[#00d4ff] text-xs font-bold uppercase tracking-[4px]">Specialised Industries</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#0066ff]/50" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featuredNiches.map((niche) => (
              <a
                key={niche.title}
                href={niche.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 ${niche.borderColor} rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 ${niche.borderHover} hover:shadow-2xl`}
                style={{ 
                  boxShadow: `0 0 0 0 ${niche.bgGlow}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 25px 80px -20px ${niche.bgGlow}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${niche.bgGlow}00`
                }}
              >
                {/* Image with blur overlay on hover */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={niche.image || "/placeholder.svg"}
                    alt={niche.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent`} />
                  
                  {/* Blur overlay with View Site on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md bg-black/40">
                    <div className={`flex items-center gap-3 bg-gradient-to-r ${niche.gradient} px-6 py-3 rounded-full shadow-xl`}>
                      <span className="text-white font-bold">View Site</span>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Tag badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r ${niche.gradient} px-4 py-2 rounded-full shadow-lg z-10`}>
                    <niche.tagIcon className="w-3.5 h-3.5 text-white" />
                    <span className="text-white font-bold text-[11px] uppercase tracking-wider">{niche.tag}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                    {niche.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${niche.gradient} bg-clip-text text-transparent mb-3`}>
                    {niche.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {niche.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${niche.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                    <span>Explore Demo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: niche.bgGlow }} />
                  </div>
                </div>
                
                {/* Corner glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none`} style={{ backgroundColor: niche.bgGlow }} />
              </a>
            ))}
          </div>
        </div>

        {/* More Examples Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-gray-500 text-xs uppercase tracking-[3px] font-semibold">More Industry Examples</span>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#0066ff]/40 hover:shadow-2xl hover:shadow-[#0066ff]/15"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block relative">
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 backdrop-blur-sm bg-[#0066ff]/20">
                    <span className="flex items-center gap-2 text-white font-bold bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md">
                      View Live Demo <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{item.title}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#0066ff] uppercase tracking-wider mb-1">Strategy</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-[#00ff88] uppercase tracking-wider mb-1">Framework</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.framework}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
