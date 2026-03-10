export type Project = {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  impact: string;
  featured?: boolean;
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
};
