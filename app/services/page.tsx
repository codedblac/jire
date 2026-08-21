import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Services | JIRE Garments',
  description: 'Explore our comprehensive uniform and branding services',
}

const brandingCategories = [
  {
    id: 'promotional-products',
    title: 'Promotional Products',
    image: '/images/services/promotional.jpg',
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
    image: '/images/services/digitalprinting.jpg',
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
    image: '/images/services/giftitems.jpg',
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
    image: '/images/services/binding.jpg',
    items: [
      'Soft (Tape) Binding',
      'Spiral Binding',
      'Bulky Printing / Photocopy',
    ],
  },
  {
    id: 'printers-toners',
    title: 'Printers and Toners',
    image: '/images/services/print.webp',
    items: [
      'HP Printers and Toners',
      'BROTHER Printers ',
      'CANON Printers ',
      'RICOH Printers ',
      'BIZHUB Printers ',
    ],
  },
  {
    id: 'office-stationery',
    title: 'Office Stationery',
    image: '/images/services/ofiice.jpg',
    items: [
      'Envelopes',
      'Pens',
      'Staples',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      
      {/* Page Container */}
      <div className="pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Brand Elevation Hero Banner */}
          <div className="bg-gradient-to-br from-[#0A1F44] to-[#102a5c] rounded-3xl p-8 md:p-12 text-center text-white mb-10 lg:mb-14 shadow-xl">
            <span className="text-[#FFD700] text-sm font-semibold tracking-wider uppercase mb-2 block">
              Brand Elevation
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Corporate & Promotional Solutions
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
              Branding is one of the most effective ways of bringing out your company’s products and services to your clients and ensure that you outsmart competitors. Branding will equip your product or service with instant credibility and value that cannot be achieved in any other way.
            </p>
          </div>

          {/* Cards Grid: 3 side-by-side on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingCategories.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFD700] transition-all duration-300 flex flex-col h-full"
              >
                {/* 70% Height Image Area on Desktop */}
                <div className="relative w-full h-[320px] lg:h-[380px] bg-gray-100 overflow-hidden shrink-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* ~30% Text Area below */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h2 className="font-heading font-bold text-xl text-[#0A1F44] mb-3">
                      {category.title}
                    </h2>
                    
                    {/* Compact Item Layout: splits items into 2 columns if list is long (6 items), stays 1 column if 3 items */}
                    <ul className={`grid gap-x-4 gap-y-2 text-sm text-gray-600 font-medium ${
                      category.items.length > 3 ? 'grid-cols-2' : 'grid-cols-1'
                    }`}>
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center min-w-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2 shrink-0" />
                          <span className="truncate">{item}</span>
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

      <Footer />
    </main>
  )
}