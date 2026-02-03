"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sparkles, Target, Briefcase, Users, BarChart3, Zap, Globe, Award, DollarSign } from "lucide-react"

interface NavigationProps {
  onContactClick: () => void
}

interface DropdownItem {
  label: string
  href: string
  icon: React.ReactNode
  description: string
}

interface NavItem {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const navItems: NavItem[] = [
    {
      label: "Services",
      dropdown: [
        { label: "Website Packages", href: "#services", icon: <Sparkles className="w-4 h-4" />, description: "Starter to Enterprise solutions" },
        { label: "Growth Services", href: "#upsells", icon: <BarChart3 className="w-4 h-4" />, description: "SEO, CRM, Ads & more" },
        { label: "£97 Audit", href: "#audit", icon: <Target className="w-4 h-4" />, description: "Risk-free website analysis" },
      ]
    },
    {
      label: "Results",
      dropdown: [
        { label: "Case Studies", href: "#proof", icon: <Award className="w-4 h-4" />, description: "See our frameworks in action" },
        { label: "Testimonials", href: "#testimonials", icon: <Users className="w-4 h-4" />, description: "What our clients say" },
        { label: "Portfolio", href: "#portfolio", icon: <Briefcase className="w-4 h-4" />, description: "Industry-specific demos" },
      ]
    },
    {
      label: "About",
      dropdown: [
        { label: "Our Process", href: "#process", icon: <Zap className="w-4 h-4" />, description: "How we deliver results" },
        { label: "Tech Stack", href: "#founder", icon: <Globe className="w-4 h-4" />, description: "100% custom-built solutions" },
        { label: "Global Reach", href: "#global", icon: <Globe className="w-4 h-4" />, description: "Clients worldwide" },
      ]
    },
    {
      label: "Packages",
      href: "#packages"
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      })
    }
    setActiveDropdown(null)
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group flex-shrink-0"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0066ff] group-hover:to-[#00d4ff] group-hover:bg-clip-text transition-all duration-300" style={{ fontFamily: 'var(--font-orbitron), Orbitron, sans-serif' }}>
              CYBERTIZE
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href!)}
                    className="px-3 xl:px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 xl:w-72 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                      {/* Dropdown gradient accent */}
                      <div className="h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]" />
                      <div className="p-1.5 xl:p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.label}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="w-full flex items-start gap-2.5 xl:gap-3 p-2.5 xl:p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group text-left"
                          >
                            <div className="flex-shrink-0 w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#0066ff] group-hover:from-[#0066ff]/30 group-hover:to-[#00d4ff]/30 transition-all">
                              {dropdownItem.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-white group-hover:text-[#00d4ff] transition-colors truncate">
                                {dropdownItem.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tablet Navigation - Show simplified nav on md-lg screens */}
          <div className="hidden md:flex xl:hidden items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.href ? scrollToSection(item.href) : scrollToSection(item.dropdown![0].href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Different sizes for different screens */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onContactClick}
              className="hidden sm:inline-flex relative group items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-3 sm:px-4 md:px-5 xl:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">Get Your Growth Plan</span>
                <span className="md:hidden">Get Started</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu className={`w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
                <X className={`w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
              </div>
            </button>

            {/* Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden md:flex xl:hidden relative p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle full menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 top-14 sm:top-16 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile & Tablet Menu */}
      <div
        className={`xl:hidden fixed top-14 sm:top-16 left-0 right-0 bottom-0 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="bg-[#0a0a0a] border-b border-white/10 shadow-2xl max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-hidden">
          <div className="h-full overflow-y-auto overscroll-contain px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                      {item.label}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.label}
                          onClick={() => scrollToSection(dropdownItem.href)}
                          className="w-full flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all text-left"
                        >
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#0066ff] flex-shrink-0">
                            {dropdownItem.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium truncate">{dropdownItem.label}</div>
                            <div className="text-[10px] sm:text-xs text-gray-500 truncate">{dropdownItem.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href!)}
                    className="w-full flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all text-left"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#0066ff]">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 sm:pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false)
                  onContactClick()
                }}
                className="w-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                Get Your Growth Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
