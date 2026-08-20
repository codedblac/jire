import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { mockProducts } from '@/lib/data'
import Image from 'next/image'

export const metadata = {
  title: 'Shop | JIRE Garments',
  description: 'Browse our collection of premium uniforms and corporate apparel',
}

export default function ShopPage() {
  const whatsappNumber = '254700000000' // Replace with your company WhatsApp phone number (including country code)

  return (
    <main className="bg-white">
      <Header />
      <div className="min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">
              Shop
            </h1>
            <p className="text-lg text-gray-600">
              Browse our complete collection of uniforms and apparel. Click to order or make an inquiry via WhatsApp.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => {
              const whatsappMessage = encodeURIComponent(
                `Hello JIRE Garments, I would like to inquire/buy the product: "${product.name}".`
              )
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#FFD700] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Category Chip */}
                      {product.category && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#0A1F44] shadow-sm">
                          {product.category}
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-6 md:p-8">
                      <h3 className="font-heading font-bold text-xl text-[#0A1F44] mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Direct WhatsApp Buy / Inquire Button */}
                  <div className="p-6 md:p-8 pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-heading font-bold text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Buy via WhatsApp
                    </a>
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