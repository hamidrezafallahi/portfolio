 

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};



export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  metrics?: {
    performance?: string;
    users?: string;
  };
  links?: {
    demo?: string;
    github?: string;
  };
  media?: MediaItem[];
};




export type Library = {
  slug: string;
  name: string;
  description: string;
  npm?: string;
  github?: string;
  features: string[];
  usageExample: string;
  tech: string[];
  media?: MediaItem[];
};