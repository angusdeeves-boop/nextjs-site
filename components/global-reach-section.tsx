"use client"

import { Globe, Users, Building2, Zap } from "lucide-react"
import { WorldMap } from "@/components/ui/world-map"

const stats = [
  { icon: Globe, value: "15+", label: "Countries", color: "from-[#0066ff] to-[#00d4ff]" },
  { icon: Users, value: "50+", label: "Clients", color: "from-[#00d4ff] to-[#00ff88]" },
  { icon: Building2, value: "25+", label: "Industries", color: "from-[#ff6b35] to-[#ffaa00]" },
  { icon: Zap, value: "24/7", label: "Support", color: "from-[#9333ea] to-[#c084fc]" },
]

const connectionDots = [
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  },
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" },
    end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
  },
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 52.52, lng: 13.405, label: "Berlin" },
  },
]

export function GlobalReachSection() {
  return (
    <section id="global" className="relative py-20 lg:py-32 bg-[#030308] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none z-10" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Worldwide Presence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight">
            <span className="gradient-text">Delivering Excellence</span>
            <br />
            <span className="text-white">Across The Globe</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            From startups in Silicon Valley to enterprises in London, Dubai, and Sydney - we partner with ambitious businesses worldwide to create digital experiences that drive growth.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 lg:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-[#0066ff]/40 hover:bg-white/[0.05] text-center"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* World Map */}
        <div className="relative">
          {/* Glow effect behind map */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/10 via-[#00d4ff]/5 to-[#0066ff]/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <WorldMap
              dots={connectionDots}
              lineColor="#00d4ff"
              showLabels={true}
              animationDuration={2.5}
              loop={true}
            />
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-white/50 text-sm sm:text-base">
            <span className="text-[#00d4ff] font-semibold">Time zones don't stop us.</span> We deliver excellence wherever you are.
          </p>
        </div>
      </div>
    </section>
  )
}
