'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0A1F44] to-[#FFD700] rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">JG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-[#0A1F44] text-lg">JIRE</h1>
              <p className="text-xs text-[#FFD700] font-medium">GARMENTS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#0A1F44] transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search - hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32 text-gray-700"
              />
            </div>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-[#0A1F44] transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#FFD700] text-[#0A1F44] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-700 hover:text-[#0A1F44] transition-colors">
              <User size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-[#0A1F44]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0A1F44] px-2 py-2 rounded transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
