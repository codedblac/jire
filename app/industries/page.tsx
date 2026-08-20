import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { INDUSTRIES } from '@/lib/constants'
import * as Icons from 'lucide-react'
import Image from 'next/image'

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
    Factory: Icons.Factory,
    Truck: Icons.Truck,
    BookOpen: Icons.BookOpen,
    Cpu: Icons.Cpu,
    BarChart3: Icons.BarChart3,
    Hammer: Icons.Hammer,
  }
  const IconComponent = iconMap[iconName] || Icons.Briefcase
  return <IconComponent size={22} />
}

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

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-600">
              Specialized uniform and branding solutions tailored to every industry requirement
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => {
              const imageSrc = industryImages[industry.id] || industryImages[1]

              return (
                <div
                  key={industry.id}
                  className="group relative flex flex-col justify-end h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Background Image Container with Clear Visibility */}
                  <div className="absolute inset-0 bg-gray-900">
                    <Image
                      src={imageSrc}
                      alt={industry.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    {/* Dark Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/95 via-[#0A1F44]/50 to-transparent transition-opacity duration-300 group-hover:from-[#0A1F44]" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                    {/* Modern Icon Badge */}
                    <div className="w-12 h-12 bg-[#FFD700] text-[#0A1F44] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {getIcon(industry.icon)}
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      {industry.name}
                    </h3>

                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                      Customized uniform solutions tailored to {industry.name.toLowerCase()} requirements.
                    </p>
                  </div>
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