'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, Globe, Code, Users } from 'lucide-react'
import { FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-[#FFD700] rounded-lg flex items-center justify-center">
                <span className="text-[#0A1F44] font-heading font-bold text-sm">JG</span>
              </div>
              <h2 className="font-heading font-bold text-lg">JIRE Garments</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premium embroidery and custom branding solutions for businesses worldwide.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#FFD700]" />
                <a href="tel:0721704194" className="hover:text-[#FFD700] transition-colors">
                  0721 704 194
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#FFD700]" />
                <a href="mailto:info@jiregarments.com" className="hover:text-[#FFD700] transition-colors">
                  info@jiregarments.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#FFD700] mt-0.5" />
                <span>Eastland&apos;s off Jogoo Rd<br />Uhuru Market Crescent<br />Business Stall B 13</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-[#FFD700]">Products</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-[#FFD700]">Resources</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-[#FFD700]">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get updates on new products and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#FFD700]"
              />
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#0A1F44] py-2 rounded font-medium text-sm hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; 2026 JIRE Garments Embroidery Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Globe size={18} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Share2 size={18} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Code size={18} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-[#FFD700] transition-colors">
              <Users size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
