"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 0,
    quote: "Our conversion rate tripled within 60 days. The ROI is easily 10x what we invested. The team understood our vision and executed flawlessly.",
    author: "James Mitchell",
    role: "CEO",
    company: "E-commerce Business",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    highlight: "10x ROI",
    metric: "340%",
    metricLabel: "Conversion Increase"
  },
  {
    id: 1,
    quote: "I'm confident my business is in safe hands. The attention to detail is unmatched. They don't just build websites - they build growth engines.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Tech Startup",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    highlight: "Growth Engine",
    metric: "£2.4M",
    metricLabel: "Revenue Generated"
  },
  {
    id: 2,
    quote: "We were lost before finding Cybertize. They transformed our entire digital presence and helped us understand what was actually driving conversions.",
    author: "Michael Torres",
    role: "COO",
    company: "Healthcare Provider",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    highlight: "Complete Transformation",
    metric: "89%",
    metricLabel: "Lead Quality Increase"
  },
  {
    id: 3,
    quote: "The strategic approach to our website redesign has been a game-changer for leads. We're now getting 4x more qualified inquiries.",
    author: "Emily Watson",
    role: "Marketing Director",
    company: "Financial Services",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    highlight: "4x More Leads",
    metric: "4x",
    metricLabel: "Lead Generation"
  },
  {
    id: 4,
    quote: "If I could give 11 stars, I'd give 12. The best decision we made this year. Our competitors are still trying to figure out how we did it.",
    author: "David Park",
    role: "Founder",
    company: "Creative Agency",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    highlight: "Best Decision",
    metric: "£500K",
    metricLabel: "New Business Won"
  },
  {
    id: 5,
    quote: "SO HAPPY WE FOUND YOU GUYS! I'd bet you've saved me 100+ hours so far. The automation alone has transformed how we operate.",
    author: "Rachel Kim",
    role: "Product Manager",
    company: "SaaS Company",
    avatar: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    highlight: "100+ Hours Saved",
    metric: "100+",
    metricLabel: "Hours Saved Monthly"
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 8000)
    return () => clearInterval(timer)
  }, [goToNext])

  const currentTestimonial = testimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-[#030308] to-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/15 border border-[#0066ff]/40 text-[#00d4ff] font-extrabold uppercase tracking-[3px] text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 lg:mb-6 animate-badgeGlow">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6 tracking-tight">
            <span className="gradient-text">Real Results From</span>
            <br />
            <span className="text-white">Real Businesses</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/10 via-[#00d4ff]/5 to-[#0066ff]/10 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0066ff]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#00d4ff]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
                {/* Content */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#0066ff]/30 mb-6" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
                      "{currentTestimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-full blur-sm opacity-60" />
                        <img
                          src={currentTestimonial.avatar || "/placeholder.svg"}
                          alt={currentTestimonial.author}
                          className="relative w-14 h-14 rounded-full object-cover border-2 border-white/20"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">{currentTestimonial.author}</p>
                        <p className="text-gray-400 text-sm">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Metric Card */}
                <div className="hidden lg:block">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`metric-${currentIndex}`}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 border border-[#0066ff]/30 rounded-2xl p-8 text-center min-w-[200px]"
                    >
                      <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                        {currentTestimonial.metric}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">
                        {currentTestimonial.metricLabel}
                      </div>
                      <div className="mt-4 inline-block bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {currentTestimonial.highlight}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Metric */}
              <div className="lg:hidden mt-6">
                <div className="bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 border border-[#0066ff]/30 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black gradient-text">
                      {currentTestimonial.metric}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {currentTestimonial.metricLabel}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {currentTestimonial.highlight}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={goToPrev}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#0066ff] group-hover:bg-[#0066ff]/10 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">Previous</span>
                </button>

                {/* Progress indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1)
                        setCurrentIndex(index)
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? "w-8 h-2 bg-gradient-to-r from-[#0066ff] to-[#00d4ff]"
                          : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <span className="hidden sm:inline text-sm font-medium">Next</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#0066ff] group-hover:bg-[#0066ff]/10 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">50+</span>
            <span>Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold">4.9</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
