import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { mockBlogPosts } from '@/lib/data'
import { Clock, User } from 'lucide-react'

export const metadata = {
  title: 'Blog | JIRE Garments',
  description: 'Read insights and tips about uniforms and branding',
}

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-[#0A1F44] mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 mb-12">Insights, tips, and industry updates</p>

          <div className="space-y-8">
            {mockBlogPosts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-gray-200 pb-8 hover:pb-8 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-heading font-bold text-2xl text-[#0A1F44] mb-3 group-hover:text-[#FFD700] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime} min read</span>
                      </div>
                      <div>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📰</div>
                      <p className="text-sm">{post.title}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
