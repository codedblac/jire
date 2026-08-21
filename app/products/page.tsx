import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { PRODUCT_CATEGORIES } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Products | JIRE Garments',
  description: 'Browse product categories from JIRE Garments',
}

const categoryImages: { [key: number]: string } = {
  1: '/images/products/corp_wear.webp',
  2: '/images/products/medical.png',
  3: '/images/products/hospitality_wear.jpg',
  4: '/images/products/industrial.jpg',
  5: '/images/products/safety.webp',
  6: '/images/products/uniforms.webp',
  7: '/images/products/sports_wear.jpg',
  8: '/images/products/accesories.avif',
}

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
              Product Categories
            </h1>
            <p className="text-lg text-gray-600">
              Browse our complete range of high-quality uniform and apparel categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((category) => {
              const imageSrc =
                categoryImages[category.id] ||
                category.image ||
                '/images/services/custom-design.png'

              return (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-[#FFD700] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Image Header */}
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg text-[#0A1F44] mb-1 group-hover:text-[#0A1F44] transition-colors">
                        {category.name}
                      </h3>
                      {/* <p className="text-gray-500 text-sm">
                        Browse our {category.name.toLowerCase()} collection
                      </p> */}
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  {/* <div className="px-6 pb-6 pt-0 flex items-center gap-1 text-xs font-semibold text-[#0A1F44] group-hover:text-[#FFD700] transition-colors">
                    <span>Explore Category</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div> */}
                </Link>
              )
            })}
          </div>

        </div>
      </div>
      <Footer />
    </main>
  )
}