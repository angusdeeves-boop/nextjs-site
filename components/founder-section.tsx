"use client"

import { Code, TrendingUp, Bot, BarChart3 } from "lucide-react"
import OrbitingSkills from "@/components/ui/orbiting-skills"

const skills = [
  {
    icon: Code,
    title: "Technical Development",
    list: "Next.js, React, TypeScript, Node.js, Custom CMS, Progressive Web Apps, API Integrations, Headless Architecture",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    list: "A/B Testing, Heatmap Analysis, User Flow Optimization, Sales Psychology, Funnel Design, Landing Page Optimization",
  },
  {
    icon: Bot,
    title: "Automation & CRM",
    list: "GoHighLevel, HubSpot, Zapier, Make.com, Custom API Workflows, Email Automation, Lead Nurturing Systems",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    list: "Technical SEO, Google Ads, Meta Ads, Content Strategy, Analytics Setup, Performance Tracking, Conversion Tracking",
  },
]

export function FounderSection() {
  return (
    <section id="founder" className="py-20 lg:py-32 bg-[#0066ff]/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Who's Behind Cybertize
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight gradient-text-white-cyan">
            Founder Expertise & Background
          </h2>
        </div>

        {/* Founder Intro */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6">
            Cybertize specializes in data-driven digital growth strategies. Founded by a conversion optimization specialist with extensive hands-on experience in web development, sales psychology, and automated systems.
          </p>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            We've analyzed 50+ websites across fitness, dental, real estate, and SaaS to understand exactly what converts—and what doesn't. This isn't theory. It's pattern recognition from real-world data.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-400 hover:-translate-y-2 hover:border-[#0066ff] hover:bg-[#0066ff]/5"
            >
              <skill.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#0066ff] mb-4 lg:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{skill.list}</p>
            </div>
          ))}
        </div>

        {/* Orbiting Skills Animation */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 gradient-text-white-cyan">
            100% Custom-Built Technology Stack
          </h3>
          <p className="text-center text-gray-500 text-sm mb-8 lg:mb-12 max-w-2xl mx-auto">
            No templates. No page builders. Every website hand-coded from scratch for complete customization and peak performance.
          </p>
          <div className="relative flex justify-center items-center">
            <OrbitingSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
