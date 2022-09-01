export type Project = {
  name: string;
  desc: string;
  repo: string;
  live?: string;
  built: string[];
  img: string;
};

export type Config = {
  name: string;
  nickname: string;
  about: string;
  photos: string[];
  address: string;
  phone: [number, number];
  mailAddr: string;
  exLinks: {
    github: string;
    twitter: string;
    instagram: string;
  };
  projects: Project[];
};
