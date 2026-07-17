import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { PRODUCT_CATEGORIES } from '@/lib/constants'

export const metadata = {
  title: 'Products | JIRE Garments',
  description: 'Browse product categories from JIRE Garments',
}

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Product Categories</h1>
          <p className="text-lg text-gray-600 mb-12">Browse our complete range of uniform categories</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-[#FFD700] hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:bg-[#FFD700]/10 transition-colors">
                  📦
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0A1F44] mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">Browse our {category.name.toLowerCase()} collection</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
