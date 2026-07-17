'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  '/images/hero/slide-1.png',
  '/images/hero/slide-2.png',
  '/images/hero/slide-3.png',
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setAutoplay(false)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#1a3a5c] to-[#0A1F44] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${heroImages[currentSlide]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44]/95 via-[#1a3a5c]/85 to-[#0A1F44]/95" />

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFE44D] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#FFD700]/20 hover:bg-[#FFD700]/40 p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-[#FFD700]/20 hover:bg-[#FFD700]/40 p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentSlide(idx)
              setAutoplay(false)
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'bg-[#FFD700] w-8' : 'bg-white/40 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
            <span className="text-sm font-medium text-white">Welcome to JIRE Garments</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-7xl leading-tight mb-6">
            Premium Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFE44D]">Uniforms</span> & Branding
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Elevate your brand with our custom uniforms, embroidery services, and professional apparel solutions. Trusted by 500+ businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0A1F44] px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Shop Now
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-[#FFD700] hover:text-[#0A1F44] transition-all duration-300"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-2xl">1000+</p>
              <p className="text-sm">Projects Delivered</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-2xl">500+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-2xl">98%</p>
              <p className="text-sm">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
