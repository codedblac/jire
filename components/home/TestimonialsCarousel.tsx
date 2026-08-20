'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const kenyanTestimonials = [
  {
    id: 1,
    name: 'Wanjiku Kamau',
    role: 'Operations Director',
    company: 'Nairobi Logistics Hub',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'JIRE Garments delivered high-quality customized staff uniforms right on schedule. The embroidery quality on our corporate logo exceeded our expectations!',
  },
  {
    id: 2,
    name: 'Otieno Ochieng',
    role: 'Head of Branding',
    company: 'Safaricom Plaza Partner Branch',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'The durability of their fabrics is top-notch. Our field staff uniforms still look pristine even after months of intense daily wear and frequent washing.',
  },
  {
    id: 3,
    name: 'Amina Mohamed',
    role: 'General Manager',
    company: 'Mombasa Beach Resort & Spa',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Exceptional customer service and attention to detail. Rebranding our hospitality team with JIRE was seamless and completely stress-free.',
  },
  {
    id: 4,
    name: 'Kipchumba Bett',
    role: 'Human Resource Lead',
    company: 'Rift Valley Agribusiness',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Finding heavy-duty, customized safety workwear in Kenya used to be a challenge until we partnered with JIRE Garments. Highly recommended!',
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from leading businesses across Kenya that trust JIRE Garments for their corporate uniforms and apparel solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kenyanTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#FFD700] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="relative w-11 h-11 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="44px"
                    className="rounded-full object-cover border-2 border-[#FFD700]"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0A1F44]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}