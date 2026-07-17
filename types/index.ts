// Product Types
export interface Product {
  id: string | number
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  image: string
  images?: string[]
  rating: number
  reviews: number
  inStock: boolean
  sizes?: string[]
  colors?: string[]
  sku?: string
  tags?: string[]
}

// Category Types
export interface Category {
  id: string | number
  name: string
  description?: string
  image: string
  icon?: string
  productCount?: number
}

// Testimonial Types
export interface Testimonial {
  id: string | number
  name: string
  company: string
  role?: string
  content: string
  rating: number
  image: string
  date?: string
}

// Portfolio Types
export interface PortfolioProject {
  id: string | number
  title: string
  description: string
  category: string
  image: string
  images?: string[]
  industry: string
  brandingType: string
  uniformType?: string
  beforeImage?: string
  afterImage?: string
  results?: string[]
  date?: string
}

// Blog Types
export interface BlogPost {
  id: string | number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  authorImage?: string
  category: string
  image: string
  publishedAt: string
  readTime: number
  tags?: string[]
}

// Cart Types
export interface CartItem {
  productId: string | number
  name: string
  price: number
  quantity: number
  size?: string
  color?: string
  image: string
}

export interface Cart {
  items: CartItem[]
  total: number
  tax: number
  shipping: number
  grandTotal: number
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: CartItem[]
  total: number
  tax: number
  shipping: number
  grandTotal: number
  shippingAddress: Address
  billingAddress?: Address
  paymentMethod: string
  trackingNumber?: string
}

// Address Types
export interface Address {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

// Quote Request Types
export interface QuoteRequest {
  id?: string
  businessName: string
  contactPerson: string
  email: string
  phone: string
  industry: string
  productsNeeded: string
  brandingMethods: string[]
  quantity: number
  budget: string
  deadline: string
  additionalInfo?: string
  attachments?: File[]
  submittedAt?: string
  status?: 'new' | 'reviewing' | 'quoted' | 'won' | 'lost'
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  wishlist?: string[]
  addresses?: Address[]
  createdAt: string
  updatedAt: string
}

// Service Types
export interface Service {
  id: string | number
  title: string
  description: string
  icon: string
  benefits?: string[]
  gallery?: string[]
  faq?: FAQ[]
}

// FAQ Types
export interface FAQ {
  id: string | number
  question: string
  answer: string
}

// Review Types
export interface Review {
  id: string | number
  productId: string | number
  authorName: string
  authorEmail: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
}

// Filter Types
export interface ProductFilters {
  categories?: string[]
  minPrice?: number
  maxPrice?: number
  sizes?: string[]
  colors?: string[]
  rating?: number
  inStock?: boolean
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

// Settings Types
export interface SiteSettings {
  siteName: string
  siteDescription: string
  phone: string
  email: string
  address: string
  socialLinks: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}
