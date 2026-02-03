"use client"

import React from "react"

import { useState } from "react"
import { X, CheckCircle, Sparkles } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0a0a] to-[#0f0f15] border border-white/10 rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#00d4ff]" />
              <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-wider">Free Strategy Call</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Let's Discuss Your Growth Goals
            </h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              15-minute consultation to identify your biggest growth opportunities. No pressure, just strategy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+44 7700 900000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Company Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                  What are you interested in? *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#0066ff] transition-colors"
                >
                  <option value="" className="bg-[#0a0a0a]">Select an option</option>
                  <optgroup label="Website & Development" className="bg-[#0a0a0a]">
                    <option value="audit" className="bg-[#0a0a0a]">Website Audit (from £97)</option>
                    <option value="starter" className="bg-[#0a0a0a]">Starter Growth Site (from £5k)</option>
                    <option value="professional" className="bg-[#0a0a0a]">Professional Growth Engine (from £10k)</option>
                    <option value="enterprise" className="bg-[#0a0a0a]">Enterprise System (from £20k+)</option>
                  </optgroup>
                  <optgroup label="Growth Services" className="bg-[#0a0a0a]">
                    <option value="seo" className="bg-[#0a0a0a]">SEO Growth Program</option>
                    <option value="automation" className="bg-[#0a0a0a]">CRM & Automation Setup</option>
                    <option value="ads" className="bg-[#0a0a0a]">Paid Ads Management</option>
                    <option value="branding" className="bg-[#0a0a0a]">Brand Identity Design</option>
                    <option value="content" className="bg-[#0a0a0a]">Content Strategy</option>
                    <option value="analytics" className="bg-[#0a0a0a]">Analytics & Tracking Setup</option>
                  </optgroup>
                  <optgroup label="Complete Growth Packages" className="bg-[#0a0a0a]">
                    <option value="launch-package" className="bg-[#0a0a0a]">Launch Package (£5k + £350/mo)</option>
                    <option value="scale-package" className="bg-[#0a0a0a]">Scale Package (£12k + £950/mo)</option>
                    <option value="dominate-package" className="bg-[#0a0a0a]">Dominate Package (from £25k + £2.4k/mo)</option>
                  </optgroup>
                  <optgroup label="Industry Solutions" className="bg-[#0a0a0a]">
                    <option value="b2b" className="bg-[#0a0a0a]">B2B / Professional Services</option>
                    <option value="recruitment" className="bg-[#0a0a0a]">Recruitment Agency</option>
                    <option value="trades" className="bg-[#0a0a0a]">Trades & Home Services</option>
                    <option value="saas" className="bg-[#0a0a0a]">SaaS Platform</option>
                  </optgroup>
                  <option value="other" className="bg-[#0a0a0a]">Not sure / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Tell us about your goals (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="What are your biggest challenges right now?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066ff] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-[#0066ff]/40 transition-all"
              >
                Book My Strategy Call
              </button>

              <p className="text-center text-gray-500 text-xs">
                We respect your privacy. Your information is never shared or sold.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#00ff88]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Strategy Call Booked!
            </h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              We've received your request and will email you within 24 hours to schedule your free 15-minute strategy call.
            </p>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Check your inbox (and spam folder) for our email from hello@cybertize.uk
            </p>
            <button
              onClick={handleClose}
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
