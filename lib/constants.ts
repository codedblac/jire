// Brand Colors
export const COLORS = {
  navy: '#0A1F44',
  gold: '#FFD700',
  navyLight: '#1a3a5c',
  goldLight: '#FFE44D',
  white: '#ffffff',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  red: '#dc2626',
  green: '#10b981',
  blue: '#3b82f6',
}

// Typography
export const TYPOGRAPHY = {
  fontSans: '"Inter", system-ui, sans-serif',
  fontHeading: '"Poppins", system-ui, sans-serif',
}

// Spacing
export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
  '2xl': '3rem',
  '3xl': '3.5rem',
  '4xl': '4rem',
}

// Border Radius
export const RADIUS = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
}

// Shadow
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  gold: '0 0 20px rgba(255, 215, 0, 0.3)',
}

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  products: [
    { label: 'Corporate Uniforms', href: '/products' },
    { label: 'Promotional Merchandise', href: '/products' },
    { label: 'Branding Services', href: '/services' },
    { label: 'Embroidery', href: '/services' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '#' },
    { label: 'Support', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
  ],
}

// Services
export const SERVICES = [
  {
    id: 1,
    title: 'Corporate Design',
    description: 'Custom corporate uniform designs tailored to your brand identity',
    icon: 'Palette',
  },
  {
    id: 2,
    title: 'Embroidery',
    description: 'Premium embroidery services for logos and custom designs',
    icon: 'Needle',
  },
  {
    id: 3,
    title: 'Screen Printing',
    description: 'High-quality screen printing for bulk orders',
    icon: 'Printer',
  },
  {
    id: 4,
    title: 'Heat Press',
    description: 'Durable heat transfer printing for logos',
    icon: 'Zap',
  },
  {
    id: 5,
    title: 'Sublimation',
    description: 'Vibrant full-color digital printing',
    icon: 'Droplet',
  },
  {
    id: 6,
    title: 'Custom Manufacturing',
    description: 'Bespoke apparel manufacturing for unique requirements',
    icon: 'Factory',
  },
]

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Corporate Wear', image: 'corporate' },
  { id: 2, name: 'Medical', image: 'medical' },
  { id: 3, name: 'Hospitality', image: 'hospitality' },
  { id: 4, name: 'Industrial', image: 'industrial' },
  { id: 5, name: 'Safety', image: 'safety' },
  { id: 6, name: 'School Uniforms', image: 'school' },
  { id: 7, name: 'Sports Wear', image: 'sports' },
  { id: 8, name: 'Accessories', image: 'accessories' },
]

// Industries
export const INDUSTRIES = [
  { id: 1, name: 'Healthcare', icon: 'Heart' },
  { id: 2, name: 'Hospitality', icon: 'UtensilsCrossed' },
  { id: 3, name: 'Retail', icon: 'ShoppingBag' },
  { id: 4, name: 'Security', icon: 'Shield' },
  { id: 5, name: 'Manufacturing', icon: 'Factory' },
  { id: 6, name: 'Logistics', icon: 'Truck' },
  { id: 7, name: 'Education', icon: 'BookOpen' },
  { id: 8, name: 'Technology', icon: 'Cpu' },
  { id: 9, name: 'Finance', icon: 'BarChart3' },
  { id: 10, name: 'Construction', icon: 'Hammer' },
]

// Why Choose Us Points
export const WHY_CHOOSE_US = [
  {
    title: '15+ Years Experience',
    description: 'Trusted by businesses worldwide',
  },
  {
    title: 'Premium Quality',
    description: 'Only the finest materials used',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored to your specific needs',
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick production times',
  },
  {
    title: 'Competitive Pricing',
    description: 'Best value for your investment',
  },
  {
    title: 'Expert Team',
    description: 'Dedicated professionals',
  },
  {
    title: 'Global Shipping',
    description: 'Worldwide delivery available',
  },
  {
    title: '100% Satisfaction',
    description: 'Guaranteed customer satisfaction',
  },
]

// Statistics
export const STATS = [
  { label: 'Projects Completed', value: 1000 },
  { label: 'Happy Clients', value: 500 },
  { label: 'Years in Business', value: 15 },
  { label: 'Satisfaction Rate', value: 98 },
]
