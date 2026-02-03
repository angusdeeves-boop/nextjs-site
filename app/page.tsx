"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AuditSection } from "@/components/audit-section"
import { PainSection } from "@/components/pain-section"
import { ProofSection } from "@/components/proof-section"
import { AuthoritySection } from "@/components/authority-section"
import { ServicesSection } from "@/components/services-section"
import { UpsellsSection } from "@/components/upsells-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { FounderSection } from "@/components/founder-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GlobalReachSection } from "@/components/global-reach-section"
import { PricingSection } from "@/components/pricing-section"
import { PrinciplesSection } from "@/components/principles-section"
import { TrustSignalsSection } from "@/components/trust-signals-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Scroll animation for cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation onContactClick={openModal} />
      <HeroSection onContactClick={openModal} />
      <AuditSection onContactClick={openModal} />
      <PainSection />
      <ProofSection onContactClick={openModal} />
      <AuthoritySection onContactClick={openModal} />
      <ServicesSection onContactClick={openModal} />
      <UpsellsSection onContactClick={openModal} />
      <ProcessSection />
      <PortfolioSection />
      <FounderSection />
      <GlobalReachSection />
      <TestimonialsSection />
      <PricingSection onContactClick={openModal} />
      <PrinciplesSection />
      <TrustSignalsSection />
      <FinalCTASection onContactClick={openModal} />
      <Footer onContactClick={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Global styles for scroll animations */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  )
}
