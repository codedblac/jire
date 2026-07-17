import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { mockProducts } from '@/lib/data'
import { Star, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Shop | JIRE Garments',
  description: 'Browse our collection of premium uniforms and corporate apparel',
}

export default function ShopPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Shop</h1>
          <p className="text-lg text-gray-600 mb-12">Browse our complete collection of uniforms and apparel</p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#FFD700] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-[#0A1F44] mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-bold text-2xl text-[#0A1F44]">KSh {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">KSh {product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>

                  <button className="w-full bg-[#FFD700] text-[#0A1F44] px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#FFE44D] transition-colors">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
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
