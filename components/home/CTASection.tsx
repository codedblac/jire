'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A1F44] via-[#1a3a5c] to-[#0A1F44] rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Get in touch with our team today to discuss your uniform and branding needs. We'll provide a personalized quote and timeline for your project.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#FFD700]" />
                  <a href="tel:+1234567890" className="hover:text-[#FFD700] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#FFD700]" />
                  <a href="mailto:info@jiregarments.com" className="hover:text-[#FFD700] transition-colors">
                    info@jiregarments.com
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 bg-[#FFD700] text-[#0A1F44] px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl justify-center sm:justify-start"
                  >
                    Request a Quote
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-[#FFD700] hover:text-[#0A1F44] transition-all duration-300 justify-center sm:justify-start"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center gap-8"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-heading font-bold text-[#FFD700] mb-2">15+</div>
                <p className="text-white/80">Years of Industry Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-heading font-bold text-[#FFD700] mb-2">1000+</div>
                <p className="text-white/80">Projects Successfully Completed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-heading font-bold text-[#FFD700] mb-2">500+</div>
                <p className="text-white/80">Satisfied Business Clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-heading font-bold text-[#FFD700] mb-2">98%</div>
                <p className="text-white/80">Customer Satisfaction Rate</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
