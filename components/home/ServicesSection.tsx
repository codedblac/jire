'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      Palette: Icons.Palette,
      Needle: Icons.Sparkles,
      Printer: Icons.Printer,
      Zap: Icons.Zap,
      Droplet: Icons.Droplet,
      Factory: Icons.Zap,
    }
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent size={32} /> : null
  }

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
          {SERVICES.map((service) => {
            const serviceImages: { [key: number]: string } = {
              1: '/images/services/custom-design.png',
              2: '/images/services/embroidery.png',
              3: '/images/services/printing.png',
              4: '/images/services/custom-design.png',
              5: '/images/services/embroidery.png',
              6: '/images/services/printing.png',
            }
            return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white border border-gray-200 rounded-xl hover:border-[#FFD700] transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  backgroundImage: `url('${serviceImages[service.id] || serviceImages[1]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-white/60" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c] rounded-lg flex items-center justify-center text-[#FFD700] mb-4 group-hover:shadow-lg transition-all duration-300">
                {getIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-heading font-bold text-xl text-[#0A1F44] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/services#${service.id}`}
                className="relative z-10 inline-flex items-center text-[#FFD700] font-medium text-sm hover:gap-2 transition-all duration-300"
              >
                Learn More
                <Icons.ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-8 py-4 rounded-lg font-heading font-bold hover:bg-[#1a3a5c] transition-all duration-300"
          >
            Explore All Services
            <Icons.ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
