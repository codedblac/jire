'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  '/images/products/accesories.avif',
  '/images/products/corppolo.jpg',
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
    <section className="relative min-h-screen bg-[#0A1F44] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentSlide]}
              alt={`Hero slide ${currentSlide + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Balanced Dark Gradient - Keeps images clear while ensuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/60 to-[#0A1F44]/40" />

        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[120px]" />
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#FFD700] hover:text-[#0A1F44] text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#FFD700] hover:text-[#0A1F44] text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentSlide(idx)
              setAutoplay(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-[#FFD700] w-10' : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-white text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-md">
            Premium Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFE44D]">Uniforms</span> & Branding
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Elevate your brand with our custom uniforms, embroidery services, and professional apparel solutions. Trusted by 500+ businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0A1F44] px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl"
              >
                Shop Now
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white hover:text-[#0A1F44] transition-all duration-300"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 inline-flex items-center justify-center gap-6 sm:gap-12 px-8 py-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 text-white">
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-xl sm:text-2xl">1000+</p>
              <p className="text-xs sm:text-sm text-gray-300">Projects</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-xl sm:text-2xl">500+</p>
              <p className="text-xs sm:text-sm text-gray-300">Clients</p>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <p className="font-heading font-bold text-[#FFD700] text-xl sm:text-2xl">98%</p>
              <p className="text-xs sm:text-sm text-gray-300">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}