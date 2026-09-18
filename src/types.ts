export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  iconType: 'creative' | 'architect' | 'executive' | 'developer' | 'marketing';
  client: string;
  year: string;
  role: string;
  duration: string;
  stats: { label: string; value: string }[];
  overview: string;
  highlights: string[];
  deliverables: string[];
  technologies: string[];
  accentColor: string;
  previewType: 'developer' | 'marketing' | 'creative-director' | 'architect' | 'executive';
  avatarUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  systemMetrics?: { label: string; value: string; desc: string }[];
  architectureNodes?: { step: string; detail: string }[];
  galleryImages: { url: string; title: string; tag: string }[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  iconType: 'compass' | 'code';
  description: string;
  points: string[];
  metrics: string;
  tools: string[];
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  iconType: 'folder' | 'responsive' | 'palette' | 'search';
  details: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  badge?: string;
  isAccent?: boolean;
  timeframe: string;
  activities: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  formattedPrice: string;
  duration: string;
  revisions: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface DeveloperInfo {
  name: string;
  role: string;
  bio: string;
  skills: { name: string; category: string }[];
  metrics: { value: string; label: string; desc: string }[];
  commitments: string[];
}

export interface ProjectInquiry {
  clientName: string;
  email: string;
  company: string;
  portfolioType: string;
  packageType?: string;
  budgetRange: string;
  timeline: string;
  servicesNeeded: string[];
  message: string;
}

