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
  category?: 'Web Development' | 'AI/ML' | 'Cloud Native CI/CD' | 'Backend' | 'Other';
  id: string;
};

export type TechCategory = {
  name: string;
  items: string[];
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
  type: 'image' | 'video' | 'post';
  thumbnail?: string;
  link?: string;
  date: string;
};
