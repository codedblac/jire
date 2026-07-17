import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import StatisticsSection from '@/components/home/StatisticsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
