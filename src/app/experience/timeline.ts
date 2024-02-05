import { Employer } from "@/enums";
import { CareerTimelineItem } from "./type";

const careerTimeline: CareerTimelineItem[] = [
  {
    company: "Crowdlinker",
    link: "https://crowdlinker.com/",
    position: "Senior Full Stack Developer",
    date: "Jan 2022 - Present",
    startDate: "2022-01-01",
    endDate: null,
    type: "Full Time",
    location: "Toronto, ON, Canada",
    description:
      "We partner with forward-thinking businesses to solve their most complex challenges with strategy, design, and technology",
    duties: [
      "Overhauled Toronto's premier meal delivery platform, Yumba, with a re-architecture and rebuild using NextJS for front-end and NodeJS for the back-end. Seamlessly migrating user accounts and subscriptions for a smooth transition to the new platform.",
      "Led the multi-tenant NFT minting admin ReactJS web app, while also playing a significant role in shaping the NextJS NFT e-commerce platform for Dropshop",
      "Revamped Sessionz's mobile app by transitioning it to the latest React Native version, ensuring compatibility for future enhancements and feature additions. Successfully deployed the updated version to the AppStore, introducing a dynamic Events feature.",
    ],
    key: Employer.CROWDLINKER,
  },
  {
    company: "Strativ AB",
    link: "https://strativ.se/",
    position: "Senior Full Stack Developer",
    date: "May 2020 - Jan 2022",
    startDate: "2020-05-01",
    endDate: "2022-01-01",
    location: "Stockholm, Sweden (Remote)",
    type: "Full Time",
    description:
      "At Strativ, we have cracked the code! By combining talented developers and experienced project managers and rigorous quality assurance from our office in Stockholm, we deliver the best of both worlds, cutting edge software with the highest quality.",
    duties: [
      "Led the ReactJS web applications for Moresailing's Admin and Client Booking Portal which increased yearly sales by 3x.",
      "Architected and spearheaded backend development for the Allez Padel game app using NodeJS and React Native. Crafted a robust system encompassing competitive ranking, match-making, tournaments, and league game modes.",
      "Got promoted to Lead JavaScript Developer and team lead",
      "Developed scalable and maintainable React and React Native boilerplates which improved coding standards and productivity of the team.",
      "Enhanced the existing recruitment process for the JavaScript stack, and helped build a great JavaScript team",
    ],
    key: Employer.STRATIV_AB,
  },

  {
    company: "Shastho AI",
    link: "https://shastho.ai/",
    position: "Frontend Engineer",
    date: "Jan 2020 - May 2020",
    startDate: "2020-01-01",
    endDate: "2020-05-01",
    location: "Remote",
    type: "Contract",
    description:
      "The one stop solution for managing healthcare in the most convenient way. It's simple and easy to provide healthcare in the fastest way possible.",
    duties: [
      "Built the React Native mobile application for patients and doctors",
      "Built the React web-embedded application for hospital management",
    ],
    techStackIcons: ["typescript", "react", "nextdotjs", "redux"],
    key: Employer.SHASTHO_AI,
  },
  {
    company: "Halkhata",
    link: "https://www.9apps.com/android-apps/com-halkhata/",
    position: "Full Stack Developer",
    date: "Oct 2019 - Dec 2020",
    startDate: "2019-10-01",
    endDate: "2020-12-01",
    type: "Part Time",
    location: "Remote",
    description:
      "Digitize your business using the Halkhata app and manage all your transactions simply and effortlessly. Manage all your Credit with customers/suppliers as well as business cash flow, income, and expenditures all in one place",
    duties: [
      "Developed an offline-first bookkeeping React Native app called Halkhata and its Backend with NodeJS which has over 50K users.",
      "Developed the marketing webapp using ReactJS",
    ],
    key: Employer.HALKHATA,
  },
  {
    company: "Roar Global",
    link: "https://roar.global/",
    position: "Software Engineer",
    date: "Sep 2019 - Apr 2020",
    startDate: "2019-09-01",
    endDate: "2020-04-01",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    description:
      "Roar Global is a media network founded in Sri Lanka. We build, operate and invest in distinct media brands that produce ground-breaking content and media solutions for a South Asian audience.",
    duties: [
      "Worked on the largest South Asian multi-lingual media platform built with React called Roar Media and it's React Native Android App",
    ],
    key: Employer.ROAR_GLOBAL,
  },
  {
    company: "Notionhive",
    link: "https://notionhive.com/",
    position: "Frontend Engineer",
    date: "Jul 2018 - Jul 2019",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    description:
      "Notionhive is a top digital marketing agency in Bangladesh that provides digital marketing, branding, video, design, and UI/UX solutions, and services.",
    duties: [
      "Created custom React Gutenberg blocks",
      "Developed multiple web applications with modern pixel perfect design",
      "Developed a prototype messenger bot integrated with WordPress REST API with Node for Nagad",
    ],
    key: Employer.NOTIONHIVE,
  },
  {
    company: "IDEEZA",
    link: "https://ideeza.com/",
    position: "Frontend Engineer",
    date: "Jan 2018 - Jun 2018",
    startDate: "2018-01-01",
    endDate: "2018-06-01",
    location: "Remote",
    type: "Full Time",
    description:
      "Meet IDEEZA, the only generative AI tool for Hardware product engineering that turns text into a blueprint in seconds. PLUS, mints it on top of blockchain for ownership recognition and future monetization!",
    duties: [
      "Developed various components and sections with Vue.js, HTML, CSS, and SASS for an automagical end-to-end IoT product development platform called Ideeza",
    ],
    key: Employer.IDEEZA,
  },
  {
    company: "Shimahin Limited",
    link: "https://www.deliveryhobe.com/",
    position: "Junior Frontend Engineer",
    date: "May 2017 - Jan 2018",
    startDate: "2017-05-01",
    endDate: "2018-01-01",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    description:
      "Started to help out the residents of Dhaka during COVID, we've ended up delivering 160k orders, serving 100k+ fans and bringing in $1M+ in sales for our local shops",
    duties: [
      "Designed and developed various sections and components of a modern multi-vendor e-commerce platform called Shophobe (Now Deliveryhobe)",
    ],
    key: Employer.SHIMAHIN,
  },
];

export default careerTimeline;
