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
  img: string;
  exLinks: {
    github: string;
    twitter: string;
    instagram: string;
  };
  projects: Project[];
};
