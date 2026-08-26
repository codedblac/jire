import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About | JIRE Garments',
  description: 'Learn about JIRE Garments and our mission',
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-5xl text-[#0A1F44] mb-6">About JIRE Garments Embroidery .</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              With over 15 years of industry experience, JIRE Garments has become a trusted partner for businesses worldwide seeking premium corporate uniforms and professional apparel solutions.
            </p>

            <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a5c] text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Our Leadership</h2>
              <p className="text-lg"><strong>Managing Director:</strong> Peter Onyango</p>
              <p className="text-sm text-gray-300 mt-2">Leading JIRE Garments with 15+ years of industry expertise and dedication to excellence</p>
            </div>

            <h2 className="text-3xl font-heading font-bold text-[#0A1F44] mt-12 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To empower businesses through exceptional uniform design and manufacturing, enhancing brand identity and employee satisfaction while maintaining the highest standards of quality and service.
            </p>

            <h2 className="text-3xl font-heading font-bold text-[#0A1F44] mt-12 mb-4">Our Values</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="text-gray-700"><strong>Quality:</strong> We never compromise on materials or craftsmanship</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="text-gray-700"><strong>Innovation:</strong> We stay at the forefront of uniform design and manufacturing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="text-gray-700"><strong>Partnership:</strong> Your success is our success</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FFD700] font-bold">✓</span>
                <span className="text-gray-700"><strong>Sustainability:</strong> We care about the environment</span>
              </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-[#0A1F44] mt-12 mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-[#0A1F44] mb-2">1000+ Projects</h3>
                <p className="text-gray-700">Successfully completed for businesses of all sizes</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-[#0A1F44] mb-2">500+ Happy Clients</h3>
                <p className="text-gray-700">Trusting us for their uniform needs</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-[#0A1F44] mb-2">98% Satisfaction</h3>
                <p className="text-gray-700">Our customers trust our quality</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-[#0A1F44] mb-2">15+ Years</h3>
                <p className="text-gray-700">Of industry expertise and excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
