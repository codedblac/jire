import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SERVICES } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Services | JIRE Garments',
  description: 'Explore our comprehensive uniform and branding services',
}

const serviceImages: { [key: number]: string } = {
  1: '/images/services/custom-design.png',
  2: '/images/services/embroidery.png',
  3: '/images/services/printing.png',
  4: '/images/services/custom-design.png',
  5: '/images/services/embroidery.png',
  6: '/images/services/printing.png',
}

const brandingCategories = [
  {
    id: 'promotional-products',
    title: 'Promotional Products',
    image: '/images/services/custom-design.png',
    items: [
      'Branded Caps',
      'Corporate Shirts',
      'Branded Umbrella',
      'Branded Reflector',
      'Branded Non Woven Bags',
      'Branded Gift Bags',
    ],
  },
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    image: '/images/services/printing.png',
    items: [
      'Business Cards',
      'Magazines',
      'Brochures',
      'Company Profile',
      'Calendars',
    ],
  },
  {
    id: 'gifts-promotional',
    title: 'Gifts and Promotional Items',
    image: '/images/services/embroidery.png',
    items: [
      'Branded Flash Disk',
      'Branded Pens',
      'Branded Key Rings',
      'Branded Mugs',
      'Branded Diaries / Note Books',
      'Branded Water Bottles',
    ],
  },
  {
    id: 'printing-binding',
    title: 'Printing and Binding',
    image: '/images/services/printing.png',
    items: [
      'Soft (Tape) Binding',
      'Spiral Binding',
      'Bulky Printing / Photocopy',
    ],
  },
  {
    id: 'printers-toners',
    title: 'Printers and Toners',
    image: '/images/services/custom-design.png',
    items: [
      'HP Printers and Toners',
      'BROTHER Printers and Toners',
      'CANON Printers and Toners',
      'RICOH Printers and Toners',
      'BIZHUB Printers and Toners',
    ],
  },
  {
    id: 'office-stationery',
    title: 'Office Stationery',
    image: '/images/services/embroidery.png',
    items: [
      'Envelopes',
      'Pens',
      'Staples',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Main Services Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive uniform and branding solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
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
                  {/* Subtle Dark Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0A1F44]/95" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Corporate Branding Section */}
          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="bg-gradient-to-br from-[#0A1F44] to-[#102a5c] rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-xl">
              <span className="text-[#FFD700] text-sm font-semibold tracking-wider uppercase mb-2 block">
                Brand Elevation
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Corporate & Promotional Solutions
              </h2>
              <p className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Branding is one of the most effective ways of bringing out your company’s products and services to your clients and ensure that you outsmart competitors. Branding will equip your product or service with instant credibility and value that cannot be achieved in any other way.
              </p>
            </div>

            {/* Additional Categories Grid (Image Top, Text Below) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandingCategories.map((category) => (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFD700] transition-all duration-300 flex flex-col"
                >
                  {/* Card Image Header */}
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Card Content Below */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#0A1F44] mb-4 group-hover:text-[#0A1F44] transition-colors">
                        {category.title}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}