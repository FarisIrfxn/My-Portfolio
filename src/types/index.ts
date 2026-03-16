export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  impact: string;
  featured?: boolean;
  color?: string;
  stars?: number;
  forks?: number;
  category?: 'Web Development' | 'AI/ML' | 'Cloud Native CI/CD' | 'Backend' | 'Video Production' | 'Audio/Video' | 'Automation' | 'Mobile Development' | 'Other';
  id: string;
  mockups?: {
    desktop?: string;
    mobile?: string;
    mobileLeft?: string;
    mobileRight?: string;
  };
};

export type TechCategory = {
  name: string;
  items: { name: string; icon?: string }[];
};

export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export type TimelineItem = {
  title: string;
  organization: string;
  duration: string;
  description: string;
  type: 'education' | 'experience';
};

export type Achievement = {
  title: string;
  description: string;
  type: 'image' | 'video' | 'post' | 'memory';
  thumbnail?: string;
  images?: string[]; // Array for multiple images (R2 support)
  link?: string;
  date: string;
  source?: string;
};
