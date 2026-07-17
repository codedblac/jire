import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { mockPortfolioProjects } from '@/lib/data'

export const metadata = {
  title: 'Portfolio | JIRE Garments',
  description: 'View our portfolio of successful projects',
}

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 mb-12">Showcase of successful projects and transformations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockPortfolioProjects.map((project) => {
              const portfolioImages: { [key: number]: string } = {
                1: '/images/portfolio/project-1.png',
                2: '/images/portfolio/project-2.png',
                3: '/images/portfolio/project-3.png',
                4: '/images/portfolio/project-4.png',
                5: '/images/portfolio/project-5.png',
                6: '/images/portfolio/project-6.png',
              }
              return (
              <div
                key={project.id}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:border-[#FFD700] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={portfolioImages[project.id] || portfolioImages[1]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#0A1F44] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-sm">
                      <p className="text-gray-500">Industry</p>
                      <p className="font-medium text-[#0A1F44]">{project.industry}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-500">Type</p>
                      <p className="font-medium text-[#0A1F44]">{project.brandingType}</p>
                    </div>
                  </div>

                  {project.results && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Results:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {project.results.slice(0, 2).map((result, i) => (
                          <li key={i}>• {result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
