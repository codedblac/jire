'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { useEffect, useState } from 'react'

export default function StatisticsSection() {
  const [counts, setCounts] = useState(STATS.map(() => 0))

  useEffect(() => {
    const timers = STATS.map((stat, index) => {
      let current = 0
      const target = stat.value
      const increment = Math.ceil(target / 50) // 50 frames

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = current
          return newCounts
        })
      }, 30)

      return () => clearInterval(interval)
    })

    return () => timers.forEach((timer) => timer())
  }, [])

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A1F44] to-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-5xl md:text-6xl text-[#FFD700] mb-3">
                {counts[index]}{stat.label.includes('Rate') ? '%' : '+'}
              </div>
              <p className="text-lg text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
