// This file defines the TypeScript interface for a project type for the portfolio page.

export interface projectType {
  name: string;
  type: string;
  startDate: Date;
  endDate: Date;
  description: string;
  detailedDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  date: string;
  imageFolder?: string;
  features?: string[];
  developmentDetails?: string;
  awards?: string[];
}