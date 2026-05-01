export type ProfileConfig = {
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
};

export const profileConfig: ProfileConfig = {
  email: "urumax@gmail.com",
  location: "Montevideo, Uruguay",
  social: {
    github: "https://github.com/kasenawe",
    linkedin: "https://www.linkedin.com/in/maximiliano-quintana-tabarez/",
  },
};
