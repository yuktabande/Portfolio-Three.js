import { meta } from "../assets/images";
import {
  contact,
  aws,
  django,
  fastapi,
  jupyter,
  langchain,
  mysql,
  numpy,
  pandas,
  powerbi,
  python,
  scikit,
  github,
  linkedin,
  mongodb,
  react,
  tailwindcss,
  copilot,
  hallucination,
  brain,
  resume,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  // {
  //   imageUrl: git,
  //   name: "Machine Learning",
  //   type: "AI/ML",
  // },
  // {
  //   imageUrl: github,
  //   name: "Deep Learning",
  //   type: "AI/ML",
  // },
  {
    imageUrl: jupyter,
    name: "Jupyter Notebook",
    type: "AI/ML",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "Data Science",
  },
  {
    imageUrl: numpy,
    name: "NumPy",
    type: "Data Science",
  },
  {
    imageUrl: scikit,
    name: "Scikit-Learn",
    type: "AI/ML",
  },
  {
    imageUrl: fastapi,
    name: "fastAPI",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "Django",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud",
  },
  {
    imageUrl: powerbi,
    name: "Power BI",
    type: "Analytics",
  },
  {
    imageUrl: langchain,
    name: "LangChain",
    type: "AI/LLM",
  },
];

export const experiences = [
  // {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#accbe1",
  //     date: "March 2020 - April 2021",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
  // {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#fbc3bc",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
  // {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
  {
    title: "Data Analytics Intern",
    company_name: "Syngenta India Ltd.",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jul 2025 - Nov 2025",
    points: [
      "Automated data processing and reporting workflows using Python and SQL, reducing manual effort and improving reporting turnaround time.",
      "Developed optimized SQL queries for large datasets, improving data retrieval efficiency and supporting faster business reporting.",
      "Identified and resolved data quality issues through validation and root-cause analysis, improving accuracy of downstream analytics.",
      "Collaborated with business stakeholders to translate reporting requirements into automated analytics solutions.",
      "Created process documentation and validation procedures to support maintainability and future scalability.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "mailto:yuktaabande@gmail.com",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/yuktabande",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/yukta-bande/",
  },
];

export const projects = [
  {
    iconUrl: copilot,
    theme: "btn-back-red",
    name: "Excel Copilot",
    description:
      "An AI-driven data companion that turns messy spreadsheets into actionable insights through automated cleaning, analysis, and visualization.",
    link: "https://github.com/yuktabande/Data-wrangler",
  },
  {
    iconUrl: hallucination,
    theme: "btn-back-green",
    name: "Hallucination Detection in LLMs",
    description:
      "A browser extension that identifies hallucinated AI-generated claims, verifies them against trusted sources, and provides real-time corrections with supporting evidence.",
    link: "https://github.com/yuktabande/Model-Hallucination-Detection-and-Correction",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/yuktabande/BRAINTUMOR",
  // },
  {
    iconUrl: brain,
    theme: "btn-back-black",
    name: "Brain MRI Tumor Classification System",
    description:
      "Built a CNN-powered medical imaging solution that analyzes brain MRI scans to detect and classify tumors into multiple categories. Implemented image preprocessing, feature extraction, model training, and performance evaluation to achieve reliable diagnostic predictions.",
    link: "https://github.com/yuktabande/BRAINTUMOR",
  },
  {
    iconUrl: resume,
    theme: "btn-back-yellow",
    name: "JD Resume Matcher",
    description:
      "Built an NLP-based resume screening platform that extracts key skills, qualifications, and experience from resumes and job descriptions, computes semantic similarity scores, and generates actionable recommendations for ATS optimization.",
    link: "https://github.com/yuktabande/NLP---Job-Matching-Model",
  },
];
