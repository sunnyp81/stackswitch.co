export interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: string[];
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categories: string[];
  website: string;
  affiliate_url: string;
  founded: number;
  pricing: {
    model: 'free' | 'freemium' | 'paid' | 'contact';
    has_free_plan: boolean;
    starting_price: number;
    currency: string;
    tiers: PricingTier[];
  };
  features: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  g2_score: number;
  capterra_score: number;
}

export const CATEGORIES: Record<string, string> = {
  crm: 'CRM',
  'project-management': 'Project Management',
  'email-marketing': 'Email Marketing',
  hr: 'HR & Payroll',
  compliance: 'Security & Compliance',
  design: 'Design',
  analytics: 'Analytics',
  communication: 'Communication',
  'customer-support': 'Customer Support',
  finance: 'Finance & Accounting',
};

const toolFiles = import.meta.glob('/data/tools/*.json', { eager: true });

export async function getAllTools(): Promise<Tool[]> {
  return Object.values(toolFiles) as Tool[];
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const file = toolFiles[`/data/tools/${slug}.json`];
  return (file as Tool) ?? null;
}

export function formatPrice(price: number, currency = 'USD'): string {
  if (price === 0) return 'Free';
  const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '€';
  return `${symbol}${price}`;
}
