import { ReactNode } from 'react';

export type PageView = 'home' | 'services' | 'menu' | 'experience' | 'contact' | 'booking';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  recommendedFor: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SectionProps {
  className?: string;
  children?: ReactNode;
}