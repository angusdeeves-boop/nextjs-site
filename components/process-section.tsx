"use client"

const processSteps = [
  {
    number: "01",
    title: "Strategy Session (Day 1)",
    description:
      "45-min deep-dive into your business, competitors, and growth goals. We identify quick wins and long-term opportunities.",
    deliverables: [
      "Competitive analysis summary",
      "Positioning recommendations",
      "Initial wireframe concepts",
    ],
  },
  {
    number: "02",
    title: "Design & Architecture (Days 2-5)",
    description:
      "Create high-fidelity mockups, messaging framework, and technical architecture. You approve before any code is written.",
    deliverables: [
      "Full design mockups (desktop + mobile)",
      "Messaging/copy framework",
      "Technical spec document",
    ],
  },
  {
    number: "03",
    title: "Development & Integration (Days 6-16)",
    description:
      "Build your conversion-optimized system with clean code, fast performance, and seamless integrations.",
    deliverables: [
      "Fully functional website",
      "Analytics & tracking setup",
      "CRM/automation integration (if selected)",
      "Weekly progress updates",
    ],
  },
  {
    number: "04",
    title: "Testing & Launch (Days 17-21)",
    description:
      "Rigorous QA testing across devices, speed optimization, SEO setup, and smooth launch with zero downtime.",
    deliverables: [
      "Launch checklist completed",
      "Performance report (speed, SEO scores)",
      "Training documentation",
      "30-day support included",
    ],
  },
  {
    number: "05",
    title: "Optimization & Growth (Ongoing)",
    description:
      "Monitor performance, identify improvements, and scale with recurring services for exponential returns.",
    deliverables: [
      "Monthly performance reports",
      "Conversion optimization recommendations",
      "Priority support access",
    ],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-gradient-to-b from-[#0066ff]/5 to-[#0066ff]/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight gradient-text-white-cyan">
            Clear Delivery Framework
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
            No mystery. Here's exactly how we work and what you receive at each stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex gap-4 sm:gap-8 mb-8 lg:mb-12">
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 sm:left-[30px] top-16 sm:top-[70px] w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-[#0066ff] to-transparent" />
              )}

              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-full flex items-center justify-center text-white font-black text-lg sm:text-2xl">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">{step.description}</p>

                <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-4 sm:p-6">
                  <strong className="block text-[#0066ff] mb-2 sm:mb-3 text-sm sm:text-base">You Receive:</strong>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                        <span className="text-[#00ff88] font-bold mt-0.5">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="max-w-3xl mx-auto p-6 lg:p-8 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#00ff88] mb-3 lg:mb-4">Our Delivery Guarantee</h3>
          <p className="text-white leading-relaxed text-sm sm:text-base">
            Milestone-based payments. You pay as we deliver, not upfront. No long-term contracts. Cancel anytime with 30 days notice.
          </p>
        </div>
      </div>
    </section>
  )
}
