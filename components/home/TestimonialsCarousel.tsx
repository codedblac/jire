'use client'

import { motion } from 'framer-motion'
import { mockTestimonials } from '@/lib/data'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that trust JIRE Garments for their uniforms and branding needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 md:p-12 text-center relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-[#FFD700]/20">
              <Quote size={48} />
            </div>

            {/* Testimonial Content */}
            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed italic relative z-10">
              "{mockTestimonials[activeIndex].content}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < mockTestimonials[activeIndex].rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}
                />
              ))}
            </div>

            {/* Author */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src={mockTestimonials[activeIndex].image}
                  alt={mockTestimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]"
                />
              </div>
              <h4 className="font-heading font-bold text-lg text-[#0A1F44] mb-1">
                {mockTestimonials[activeIndex].name}
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                {mockTestimonials[activeIndex].role}
              </p>
              <p className="text-gray-500 text-sm font-medium">
                {mockTestimonials[activeIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#FFD700] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mockTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#FFD700] transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#FFD700]"
                />
                <div>
                  <p className="font-bold text-sm text-[#0A1F44]">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
