import { calculateYearsOfExperience } from "../helper";

const yearsOfExperience = calculateYearsOfExperience();

export const summarySections = [
  {
    title: "experience",
    content: `I am a seasoned Full Stack Developer based in Toronto with nearly ${yearsOfExperience} years of professional
    experience. My focus is on architecting and delivering
    high-performance software that not only meets but exceeds user
    expectations. My journey in the tech industry has seen me evolve from
    a front-end expert to a proficient Full Stack professional and team
    leader.`,
  },
  {
    title: "techStack",
    content: `With a strong foundation in ReactJS for web applications, NodeJS for
    backend APIs, and React Native for mobile apps, I've played a
    pivotal role in delivering robust, scalable, and user-friendly
    solutions.`,
  },
  {
    title: "codeCraftsmanship",
    content: `What sets me apart is not just the projects I've delivered but my
    deep-rooted commitment to code quality. I deeply care about writing
    maintainable, readable, and scalable code. This focus on code
    craftsmanship is not just a practice but a core philosophy that I
    bring to every project.`,
  },
];
