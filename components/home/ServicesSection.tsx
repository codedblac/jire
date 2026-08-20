'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function ServicesSection() {
  const serviceImages: { [key: number]: string } = {
    1: '/images/services/custom-design.png',
    2: '/images/services/embroidery.png',
    3: '/images/services/printing.png',
    4: '/images/services/custom-design.png',
    5: '/images/services/embroidery.png',
    6: '/images/services/printing.png',
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom design to production, we offer comprehensive uniform and branding solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                href={`/services#${service.id}`}
                className="group relative flex flex-col justify-end h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 bg-gray-900">
                  <Image
                    src={serviceImages[service.id] || serviceImages[1]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Dark Gradient Overlay to Ensure Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0A1F44]/95" />
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-8 py-4 rounded-xl font-heading font-bold hover:bg-[#1a3a5c] hover:shadow-lg transition-all duration-300"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}