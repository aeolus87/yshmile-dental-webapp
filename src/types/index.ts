// types.ts
import { ReactNode } from "react";
export interface CarouselImage {
  src: string;
  alt: string;
}
export interface NavigationLink {
  name: string;
  path: string;
  subItems?: string[];
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface SocialLink {
  icon: ReactNode;
  name: string;
  href: string;
  hoverColor: string;
}

export interface ContactInfo {
  icon: ReactNode;
  text: string;
  href: string;
}

export interface QuickLink {
  name: string;
  path: string;
}
