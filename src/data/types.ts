export interface Company {
  id: string;
  slug: string;
  name: string;
  industry: string;
  description: string;
  title: string;
  subtitle: string;
  logo: string;
  image: string | null;
  website: string;
  totalInitiatives: number;
  initiatives: Initiative[];
}

export interface Initiative {
  title: string;
  description: string;
  impact: string;
  toolIds: string[];
  metrics: Metric[];
  domains: string[];
  timeframe?: string;
}

export interface Metric {
  title: string;
  value: string;
  suffix?: string;
  description: string;
  isStarMetric: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}
