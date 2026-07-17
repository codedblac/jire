import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SERVICES } from '@/lib/constants'
import * as Icons from 'lucide-react'

export const metadata = {
  title: 'Services | JIRE Garments',
  description: 'Explore our comprehensive uniform and branding services',
}

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
  return IconComponent ? <IconComponent size={40} /> : null
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 mb-12">Comprehensive uniform and branding solutions tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-[#FFD700] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c] rounded-lg flex items-center justify-center text-[#FFD700] mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0A1F44] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-[#FFD700] font-medium hover:gap-2 transition-all duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
