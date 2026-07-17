'use client'

import { motion } from 'framer-motion'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { Check } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
            Why Choose JIRE Garments?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide superior quality, professional service, and exceptional value for every project.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-[#FFD700] transition-all duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFD700]">
                  <Check size={24} className="text-[#0A1F44]" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-[#0A1F44] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
