"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { RippleButton } from "@/components/ui/ripple-button"
import { Check, Sparkles, Crown, Building2 } from "lucide-react"

interface PricingSectionProps {
  onContactClick: () => void
}

// WebGL Shader Canvas for animated background
const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl")
    if (!gl) return
    glRef.current = gl

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        uv.x *= 1.5; uv.x -= 0.25;
        float mask = 0.0;
        float radius = .35;
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 bgColor = vec3(0.03, 0.03, 0.04);
        vec3 foregroundColor=vec3(0.0, 0.4, 1.0) * 0.5 + vec3(v.x * 0.15, v.y * 0.2, 0.6);
        vec3 color=mix(bgColor,foregroundColor,mask * 0.5);
        color=mix(color,vec3(0.0, 0.6, 0.9),paintCircle(uv,center,radius,.003).r * 0.4);
        gl_FragColor=vec4(color,1.);
      }`

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) throw new Error("Could not create shader")
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vertexShaderSource))
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource))
    gl.linkProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const aPosition = gl.getAttribLocation(program, "aPosition")
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

    const iTimeLoc = gl.getUniformLocation(program, "iTime")
    const iResLoc = gl.getUniformLocation(program, "iResolution")

    let animationFrameId: number
    const render = (time: number) => {
      gl.uniform1f(iTimeLoc, time * 0.001)
      gl.uniform2f(iResLoc, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animationFrameId = requestAnimationFrame(render)
    }

    const handleResize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

interface PricingCardProps {
  planName: string
  tagline: string
  description: string
  price: string
  priceSubtext?: string
  websiteFeatures: string[]
  serviceFeatures: string[]
  buttonText: string
  isPopular?: boolean
  icon: React.ElementType
  accentColor: string
  onContactClick: () => void
}

const PricingCard = ({
  planName,
  tagline,
  description,
  price,
  priceSubtext,
  websiteFeatures,
  serviceFeatures,
  buttonText,
  isPopular = false,
  icon: Icon,
  accentColor,
  onContactClick,
}: PricingCardProps) => {
  return (
    <div
      className={`
        relative backdrop-blur-xl bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-md px-6 sm:px-8 py-8 sm:py-10 flex flex-col transition-all duration-500
        from-white/[0.08] to-white/[0.02] border border-white/10
        ${isPopular ? "lg:scale-105 ring-2 ring-[#0066ff]/50 from-white/[0.12] to-white/[0.05] border-[#0066ff]/40 shadow-2xl shadow-[#0066ff]/20" : "hover:-translate-y-2 hover:border-[#0066ff]/30"}
      `}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white tracking-wide flex items-center gap-1.5">
          <Crown className="w-3 h-3" />
          Best Value
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{planName}</h2>
          <p className={`text-xs font-semibold uppercase tracking-wider mt-1`} style={{ color: accentColor }}>{tagline}</p>
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
          <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>
      </div>
      
      <p className="text-sm text-white/50 mb-6 leading-relaxed">{description}</p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-black text-white">{price}</span>
        </div>
        {priceSubtext && <span className="text-sm text-white/40 mt-1 block">{priceSubtext}</span>}
      </div>

      {/* Animated Glassy Divider */}
      <div className="w-full mb-6 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]" />

      {/* Website Features */}
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Website Included</p>
        <ul className="space-y-2">
          {websiteFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-white/70">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Service Features */}
      <div className="mb-8 flex-grow">
        <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-3">Growth Services Included</p>
        <ul className="space-y-2">
          {serviceFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-white/70">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <RippleButton
        onClick={onContactClick}
        className={`
          mt-auto w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all
          ${isPopular ? "bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/40" : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"}
        `}
      >
        {buttonText}
      </RippleButton>
    </div>
  )
}

// Adjusted prices: slightly higher monthly fees that still justify bundle savings
// Launch: Website (£1,500) + Services if separate would be ~£400/mo, bundle = £350/mo (12% savings)
// Scale: Website (£4,000) + Services if separate would be ~£1,100/mo, bundle = £950/mo (14% savings)  
// Dominate: Website (£10k+) + Services if separate would be ~£2,800/mo, bundle = £2,400/mo (14% savings)
const pricingPlans: Omit<PricingCardProps, "onContactClick">[] = [
  {
    planName: "Launch",
    tagline: "Website + Foundation",
    description: "Perfect for businesses ready to establish a professional online presence with essential growth tools.",
    price: "£5,000",
    priceSubtext: "One-time + £350/mo services",
    icon: Sparkles,
    accentColor: "#10b981",
    websiteFeatures: [
      "5-7 high-converting pages",
      "Mobile-first responsive design",
      "Performance optimized (<2s load)",
      "Lead capture forms & automation",
    ],
    serviceFeatures: [
      "Basic SEO setup & optimization",
      "Analytics & conversion tracking",
      "Monthly performance reports",
      "30-day priority launch support",
    ],
    buttonText: "Get Started",
  },
  {
    planName: "Scale",
    tagline: "Website + Full Growth Stack",
    description: "The complete system for businesses serious about scaling. Website, automation, and ongoing growth combined.",
    price: "£12,000",
    priceSubtext: "One-time + £950/mo services",
    icon: Crown,
    accentColor: "#3b82f6",
    websiteFeatures: [
      "8-12 page conversion funnel",
      "Advanced interactive features",
      "Custom integrations & API",
      "Strategic positioning framework",
    ],
    serviceFeatures: [
      "Full CRM & automation setup",
      "Email + SMS sequence implementation",
      "SEO OR Paid ads management",
      "60-day optimization support",
    ],
    buttonText: "Choose Scale",
    isPopular: true,
  },
  {
    planName: "Dominate",
    tagline: "Full Platform + All Services",
    description: "For ambitious businesses ready to dominate their market. No limits, full support, maximum growth.",
    price: "From £25k",
    priceSubtext: "One-time + £2,400/mo services",
    icon: Building2,
    accentColor: "#8b5cf6",
    websiteFeatures: [
      "Custom platform (unlimited pages)",
      "Enterprise integrations & systems",
      "Multi-language / multi-location",
      "Advanced functionality & dashboards",
    ],
    serviceFeatures: [
      "SEO + Paid Ads + Content (all included)",
      "Complete CRM & automation suite",
      "Dedicated account manager",
      "Weekly strategy sessions",
    ],
    buttonText: "Contact Us",
  },
]

export function PricingSection({ onContactClick }: PricingSectionProps) {
  return (
    <section id="packages" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated WebGL Background */}
      <div className="absolute inset-0 z-0">
        <ShaderCanvas />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-[1]" />
      <div className="absolute inset-0 bg-[#0a0a0a]/50 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Complete Growth Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight text-white">
            Website <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0066ff] via-[#00d4ff] to-[#0066ff]">+ Services</span> Combined
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Everything you need in one package. Premium website builds bundled with ongoing growth services at exclusive rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center lg:items-stretch mb-12 lg:mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} onContactClick={onContactClick} />
          ))}
        </div>

        {/* Payment Note with Glassy Style */}
        <div className="max-w-5xl mx-auto p-6 lg:p-8 backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Why Bundle Website + Services?</h3>
          
          {/* Glassy Divider */}
          <div className="w-full mb-6 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]" />
          
          <div className="grid sm:grid-cols-3 gap-6 text-sm sm:text-base">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-emerald-400">15%</span>
              </div>
              <p className="text-white font-semibold mb-1">Bundle Savings</p>
              <p className="text-white/50 text-sm">Save vs. purchasing website and services separately.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-400">1</span>
              </div>
              <p className="text-white font-semibold mb-1">Single Point of Contact</p>
              <p className="text-white/50 text-sm">One team handles everything. No coordination headaches.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-violet-400">3x</span>
              </div>
              <p className="text-white font-semibold mb-1">Faster Results</p>
              <p className="text-white/50 text-sm">Integrated strategy means faster time to ROI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
