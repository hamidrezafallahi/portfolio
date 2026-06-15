export type Bilingual = {
  fa: string;
  en: string;
};


export type MediaItem = {
  type: "image" | "video";

  src: string;

  alt: Bilingual;
};



export type Project = {

  slug: string;


  title: Bilingual;


  description: Bilingual;


  problem: Bilingual;


  solution: Bilingual;


  role: Bilingual;


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

  slug:string;


  name:Bilingual;


  description:Bilingual;


  npm?:string;


  github?:string;


  features:Bilingual[];


  usageExample:Bilingual;


  tech:string[];


  media?:MediaItem[];

};