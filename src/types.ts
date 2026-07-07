export interface Program {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Transformation {
  id: string;
  name: string;
  achievement: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
