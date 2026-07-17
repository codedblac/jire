import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact | JIRE Garments',
  description: 'Get in touch with JIRE Garments',
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="min-h-screen py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-5xl text-[#0A1F44] mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#0A1F44] mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD700]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#FFD700] text-[#0A1F44] px-6 py-3 rounded-lg font-bold hover:bg-[#FFE44D] transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#0A1F44] mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44]">Phone</h3>
                    <a href="tel:0721704194" className="text-gray-600 hover:text-[#FFD700] transition-colors">
                      0721 704 194
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44]">Email</h3>
                    <a href="mailto:jiregarmentsjire@gmail.com" className="text-gray-600 hover:text-[#FFD700] transition-colors">
                      jiregarmentsjire@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#0A1F44]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44]">Address</h3>
                    <p className="text-gray-600">
                      Eastland&apos;s off Jogoo Rd<br />
                      Uhuru Market Crescent<br />
                      Business Stall B 13<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 mt-6">
                  <h3 className="font-bold text-[#0A1F44] mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM EAT</li>
                    <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM EAT</li>
                    <li><strong>Sunday:</strong> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
