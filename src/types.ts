/**
 * TypeScript definitions for Vibe Coding Nigeria
 */

export interface RegistrationDetails {
  id?: string;
  fullName: string;
  email: string;
  whatsapp: string;
  location: string;
  pathPreference: 'virtual' | 'physical';
  paymentMethod: 'bank_transfer' | 'ussd';
  paymentConfirmed: boolean;
  registrationDate: string;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorLocation: string;
  authorRole: string;
  title: string;
  content: string;
  likes: number;
  commentsCount: number;
  category: 'tip' | 'success' | 'question' | 'ideas';
  date: string;
  hasLiked?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface VibePromptTemplate {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  mockResponse: {
    explanation: string;
    appName: string;
    codeSnippet: string;
    previewElements: string[];
    actionLabel: string;
  };
}

export interface AppConfig {
  appsScriptUrl: string;
  setAppsScriptUrl: (url: string) => void;
}
