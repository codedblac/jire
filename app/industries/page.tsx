import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { INDUSTRIES } from '@/lib/constants'
import * as Icons from 'lucide-react'

export const metadata = {
  title: 'Industries | JIRE Garments',
  description: 'Industry-specific uniform solutions',
}

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Heart: Icons.Heart,
    UtensilsCrossed: Icons.UtensilsCrossed,
    ShoppingBag: Icons.ShoppingBag,
    Shield: Icons.Shield,
    Factory: Icons.Zap,
    Truck: Icons.Truck,
    BookOpen: Icons.BookOpen,
    Cpu: Icons.Cpu,
    BarChart3: Icons.BarChart3,
    Hammer: Icons.Hammer,
  }
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent size={32} /> : null
}

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Industries We Serve</h1>
          <p className="text-lg text-gray-600 mb-12">Specialized uniform solutions for every industry</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => {
              const industryImages: { [key: number]: string } = {
                1: '/images/industries/healthcare.png',
                2: '/images/industries/hospitality.png',
                3: '/images/industries/retail.png',
                4: '/images/industries/construction.png',
                5: '/images/industries/corporate.png',
                6: '/images/industries/healthcare.png',
                7: '/images/industries/hospitality.png',
                8: '/images/industries/retail.png',
                9: '/images/industries/construction.png',
                10: '/images/industries/corporate.png',
              }
              return (
              <div
                key={industry.id}
                className="group relative p-6 bg-white border border-gray-200 rounded-xl hover:border-[#FFD700] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('${industryImages[industry.id] || industryImages[1]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-white/60" />
                
                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFE44D] rounded-lg flex items-center justify-center text-[#0A1F44] mb-4">
                  {getIcon(industry.icon)}
                </div>
                <h3 className="relative z-10 font-heading font-bold text-lg text-[#0A1F44] group-hover:text-[#FFD700] transition-colors">
                  {industry.name}
                </h3>
                <p className="relative z-10 text-gray-600 text-sm mt-2">
                  Customized uniform solutions tailored to {industry.name.toLowerCase()} requirements
                </p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
