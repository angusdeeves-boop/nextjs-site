"use client"

import Script from "next/script"
import { Target, TrendingUp, Zap, Users, Clock, Award } from "lucide-react"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js"
        strategy="lazyOnload"
      />
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,102,255,0.15)_0%,transparent_70%)] animate-float pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_70%)] animate-float pointer-events-none" style={{ animationDelay: "5s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="animate-fadeInUp z-10">
              <span className="inline-block text-[#0066ff] font-bold text-xs sm:text-sm uppercase tracking-[3px] mb-4 lg:mb-6">
                Elite Digital Growth Partner
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-4 lg:mb-6 tracking-tight text-balance">
                We Don't Build Websites.
                <br />
                We Build <span className="gradient-text">Growth Engines.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 lg:mb-8 leading-relaxed max-w-xl">
                Stop losing leads to outdated websites. Cybertize delivers conversion-optimized digital systems that turn visitors into customers—Proven frameworks designed to deliver visible results in under 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onContactClick}
                  className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-[#0066ff]/40 hover:-translate-y-1 transition-all"
                >
                  Get Your Growth Plan
                </button>
                <a
                  href="#portfolio"
                  className="border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:border-[#0066ff] hover:bg-[#0066ff]/10 transition-all text-center"
                >
                  See Our Work
                </a>
              </div>
            </div>

            {/* Right side - Spline 3D Viewer with surrounding orbital cards */}
            <div className="relative h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[650px]">
              {/* Spline 3D - centered and unobstructed */}
              <div className="absolute inset-8 sm:inset-12 lg:inset-16 rounded-2xl overflow-hidden">
                {/* @ts-expect-error - spline-viewer is a custom element loaded via script */}
                <spline-viewer
                  url="https://prod.spline.design/sIH8xnB7Trd5QP53/scene.splinecode"
                  className="w-full h-full"
                />
              </div>

              {/* Orbital Stats Cards - positioned around the edges, not covering center */}
              
              {/* Card 1 - Top center, above the robot */}
              <div
                className="absolute -top-2 sm:top-0 left-1/2 -translate-x-1/2 w-[160px] sm:w-[180px] lg:w-[200px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-[#0066ff] hover:shadow-xl hover:shadow-[#0066ff]/30 transition-all duration-400 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066ff]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">Success Rate</div>
                    <div className="text-[#00d4ff] font-bold text-sm sm:text-base">97%</div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Right side, vertically centered */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -right-2 sm:right-0 w-[140px] sm:w-[160px] lg:w-[180px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-[#00ff88] hover:shadow-xl hover:shadow-[#00ff88]/30 transition-all duration-400 group cursor-pointer animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">Conversion Boost</div>
                    <div className="text-[#00ff88] font-bold text-lg sm:text-xl">+340%</div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom right corner */}
              <div
                className="absolute -bottom-2 sm:bottom-0 right-4 sm:right-8 w-[140px] sm:w-[160px] lg:w-[180px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-400 group cursor-pointer animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">Delivery</div>
                    <div className="text-yellow-400 font-bold text-sm sm:text-base">21 Days</div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Left side, vertically centered */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -left-2 sm:left-0 w-[140px] sm:w-[160px] lg:w-[180px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-400/30 transition-all duration-400 group cursor-pointer animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">Clients Served</div>
                    <div className="text-purple-400 font-bold text-lg sm:text-xl">50+</div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Bottom left corner */}
              <div
                className="absolute -bottom-2 sm:bottom-0 left-4 sm:left-8 w-[140px] sm:w-[160px] lg:w-[180px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 sm:p-4 hover:border-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/30 transition-all duration-400 group cursor-pointer animate-float"
                style={{ animationDelay: "4s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">Avg ROI</div>
                    <div className="text-[#00d4ff] font-bold text-sm sm:text-base">12x Return</div>
                  </div>
                </div>
              </div>

              {/* Card 6 - Top right area - hidden on mobile to prevent overlap */}
              <div
                className="hidden lg:block absolute top-8 right-0 w-[140px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-400 group cursor-pointer animate-float"
                style={{ animationDelay: "5s" }}
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div className="text-emerald-400 font-bold text-xs sm:text-sm">Top Rated</div>
                </div>
              </div>

              {/* Decorative orbital ring */}
              <div className="absolute inset-4 sm:inset-8 border border-white/5 rounded-full pointer-events-none animate-spin-slow" style={{ animationDuration: "60s" }} />
              <div className="absolute inset-12 sm:inset-16 border border-dashed border-white/5 rounded-full pointer-events-none animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
