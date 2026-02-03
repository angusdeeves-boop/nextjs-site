"use client"

import { useState } from "react"
import { Play, Pause, ExternalLink, TrendingUp, Zap, FileSearch, BarChart3, ChevronRight, Users, Clock, Award, Target } from "lucide-react"

interface ProofSectionProps {
  onContactClick: () => void
}

const videoItems = [
  {
    badge: "Case Study",
    badgeIcon: TrendingUp,
    title: "Fitness Studio Transformation",
    description: "Converted outdated WordPress site into a modern conversion machine. Load time reduced from 8s to 1.4s.",
    metrics: [
      { value: "82%", label: "Faster" },
      { value: "3.2x", label: "Inquiries" },
    ],
    videoUrl: "https://res.cloudinary.com/diedezwfo/video/upload/v1767397064/video2_v0kyfi.mp4",
    accentColor: "from-[#00ff88] to-[#00d4ff]",
    glowColor: "#00ff88",
  },
  {
    badge: "Live Demo",
    badgeIcon: Zap,
    title: "High-Converting Lead Funnel",
    description: "Multi-step lead capture with trust signals, social proof, and automated sequences.",
    link: "Request Demo Access",
    videoUrl: "https://res.cloudinary.com/diedezwfo/video/upload/v1767397046/Conversion_Funnel_Demo_-_Opera_2025-12-30_15-28-18_qexfei.mp4",
    accentColor: "from-[#0066ff] to-[#00d4ff]",
    glowColor: "#0066ff",
  },
  {
    badge: "Sample Audit",
    badgeIcon: FileSearch,
    title: "Website Audit Example",
    description: "Detailed conversion analysis, performance report, and prioritised recommendations.",
    link: "See Sample Report",
    videoUrl: "https://res.cloudinary.com/diedezwfo/video/upload/v1767396988/97_Website_Audit_Capability_Demo_-_Opera_2025-12-30_15-43-32_v8zcgr.mp4",
    accentColor: "from-[#9333ea] to-[#c084fc]",
    glowColor: "#9333ea",
  },
]

const statsData = {
  badge: "Results Overview",
  badgeIcon: BarChart3,
  title: "Our Track Record",
  accentColor: "from-[#ff6b35] to-[#ffaa00]",
  glowColor: "#ff6b35",
  stats: [
    { icon: TrendingUp, value: "340%", label: "Avg. Lead Increase", color: "#00ff88" },
    { icon: Clock, value: "< 2s", label: "Load Time Target", color: "#0066ff" },
    { icon: Users, value: "50+", label: "Clients Served", color: "#9333ea" },
    { icon: Award, value: "98%", label: "Client Satisfaction", color: "#ff6b35" },
  ],
}

function VideoCard({ item, onContactClick }: { item: typeof videoItems[0]; onContactClick: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const togglePlay = () => {
    const video = document.getElementById(`video-${item.title}`) as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const BadgeIcon = item.badgeIcon

  return (
    <div
      className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl h-full flex flex-col"
      style={{ 
        boxShadow: isHovered ? `0 25px 60px -15px ${item.glowColor}30` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t ${item.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
        
        <video
          id={`video-${item.title}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>

        <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={togglePlay}
            className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${item.accentColor} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            ) : (
              <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-0.5" />
            )}
          </button>
        </div>

        <div className={`absolute top-3 left-3 lg:top-4 lg:left-4 flex items-center gap-1.5 lg:gap-2 bg-gradient-to-r ${item.accentColor} px-3 lg:px-4 py-1.5 lg:py-2 rounded-full z-30 shadow-lg`}>
          <BadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
          <span className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-wider">{item.badge}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1">
        <h3 className="text-lg lg:text-xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {item.metrics && (
          <div className="flex gap-6 mb-4">
            {item.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className={`text-2xl lg:text-3xl font-black bg-gradient-to-r ${item.accentColor} bg-clip-text text-transparent`}>
                  {metric.value}
                </span>
                <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {item.link && (
          <button
            onClick={onContactClick}
            className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${item.accentColor} bg-clip-text text-transparent font-bold text-sm transition-all hover:gap-3 mt-auto`}
          >
            <span>{item.link}</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" style={{ color: item.glowColor }} />
          </button>
        )}
      </div>

      <div 
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" 
        style={{ backgroundColor: item.glowColor }} 
      />
    </div>
  )
}

function StatsCard({ onContactClick }: { onContactClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl h-full flex flex-col"
      style={{ 
        boxShadow: isHovered ? `0 25px 60px -15px ${statsData.glowColor}30` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Stats Grid Container - matches video aspect ratio */}
      <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-[#0a0a12] to-[#050510] p-4 lg:p-6">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff6b35]/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#ffaa00]/20 to-transparent rounded-full blur-2xl" />

        {/* Stats 2x2 Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 lg:gap-4 h-full">
          {statsData.stats.map((stat) => {
            const StatIcon = stat.icon
            return (
              <div 
                key={stat.label}
                className="flex flex-col items-center justify-center bg-white/[0.03] border border-white/5 rounded-xl p-3 lg:p-4 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
              >
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <StatIcon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: stat.color }} />
                </div>
                <span 
                  className="text-xl lg:text-2xl xl:text-3xl font-black"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span className="text-[9px] lg:text-[10px] text-gray-500 uppercase tracking-wider text-center leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Badge */}
        <div className={`absolute top-3 left-3 lg:top-4 lg:left-4 flex items-center gap-1.5 lg:gap-2 bg-gradient-to-r ${statsData.accentColor} px-3 lg:px-4 py-1.5 lg:py-2 rounded-full z-30 shadow-lg`}>
          <statsData.badgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
          <span className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-wider">{statsData.badge}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1">
        <h3 className="text-lg lg:text-xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
          {statsData.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          Consistent results across industries. Our frameworks are built on data, not guesswork.
        </p>

        <button
          onClick={onContactClick}
          className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${statsData.accentColor} bg-clip-text text-transparent font-bold text-sm transition-all hover:gap-3 mt-auto`}
        >
          <span>Get Your Free Audit</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" style={{ color: statsData.glowColor }} />
        </button>
      </div>

      <div 
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" 
        style={{ backgroundColor: statsData.glowColor }} 
      />
    </div>
  )
}

export function ProofSection({ onContactClick }: ProofSectionProps) {
  return (
    <section id="proof" className="py-20 lg:py-32 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#0066ff]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#00d4ff]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/20 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-5 py-3 rounded-full mb-6 animate-badgeGlow">
            <Play className="w-4 h-4" />
            Proof of Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-5 tracking-tight">
            <span className="text-white">See Our</span>
            <br />
            <span className="gradient-text">Frameworks in Action</span>
          </h2>
          <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Real demos, sample builds, and documented transformations. Judge our work by results, not promises.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {videoItems.map((item) => (
            <VideoCard key={item.title} item={item} onContactClick={onContactClick} />
          ))}
          <StatsCard onContactClick={onContactClick} />
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white font-bold text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066ff]/40 hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
