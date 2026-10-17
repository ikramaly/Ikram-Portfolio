// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import { SiSpring } from "react-icons/si";
import  springlogo from "./assets/tech_logo/springcore.png";
import intelliJidea from "./assets/tech_logo/intelliJ.png"
// import aktulogo from "./assets/tech_logo/aktulogo.png"


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import mentorlogo from './assets/company_logo/mentorlogo.png';
import qspiderlogo from './assets/company_logo/qspiderlogo.png';

// Education Section Logo's
import aktulogo from './assets/education_logo/aktulogo.png';
// import collegelogo from './assets/education_logo/collegelogo.jpeg';
import collegelogo from './assets/education_logo/dav_logo.png';
import schoollogo from './assets/education_logo/bss_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import bookmytrainlogo from './assets/work_logo/book_my_train.png';
import carrentallogo from './assets/work_logo/car_rental_system.png';
import garagebillinglogo from './assets/work_logo/garage_billig.png';
import jsprojectslogo from './assets/work_logo/js_projects.png';
import portfoliologo from './assets/work_logo/portfolio.png';

import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';
// import springlogo from './assets/work_logo/springlogo';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Core', logo: springlogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'JDBC', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'IntelliJ', logo: intelliJidea },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: qspiderlogo,
      role: "Java Full Stack Developer Trainee",
      company: "QSpiders – Software Testing Training Institute",
      date: "Mar 2026 – Present",
      desc: "Currently undergoing Java Full Stack Developer training at QSpiders, Noida, with hands-on practice in Java, SQL, JDBC, frontend development, and web application development. Working on practical projects and strengthening problem-solving and development skills.",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React JS",
        "Core Java",
        "JDBC",
        "MySQL",
        "Spring COre",
        "SpringBoot"
      ],
    },
    {
      id: 1,
      img: mentorlogo,
      role: "Frontend Developer Intern",
      company: "Unified Mentor Private Limited",
      date: "Feb 2026 – Jul 2026",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Redux",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: aktulogo,
      school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
      date: "July 2022 - June 2026",
      grade: "7.63 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science & Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh.",
      degree: "Bachelor Of Technology - Btech",
    },
    {
      id: 1,
      img: collegelogo,
      school: "DAV Inter College Budhana, M.Nagar",
      date: "March 2021 - July 2022",
      grade: "73.4%",
      desc: "I completed my class 12 education from DAV INTER COLLEGE BUDHANA, M.NAGAR, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "UP Board(XII) - With PCM",
    },
    {
      id: 2,
      img: schoollogo,
      school: "BSS Inter College Budhana, M.Nagar",
      date: "March 2019 - July 2020",
      grade: "84.5%",
      desc: "I completed my class 10 education from BSS Inter College Budhana, M.Nagar, under the UP board.",
      degree: "UP Board (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Personal Portfolio Website",
      description:
        "Developed a personal portfolio website using HTML, CSS, JavaScript, and React.js to showcase my skills, projects, and educational background. The website features a modern user interface, responsive design, smooth navigation, and dedicated sections for projects, skills, experience, and education. This project helped me strengthen my React.js skills, component-based development, and responsive web design techniques while creating a professional online presence.",
      image: portfoliologo,
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js","Responsive Web Design"],
      github: "https://github.com/ikramaly/BookMyTrain",
    },
    {
      id: 1,
      title: "Book My Train",
      description:
        "BookMyTrain is a console-based railway ticket booking application developed using Core Java. It allows users to register, log in, search for trains, book tickets, view their bookings, and cancel tickets. The project uses Object-Oriented Programming (OOP) principles and Java Collections Framework to manage user information, train details, and booking records. Through this project, I strengthened my understanding of Java programming, application logic, and object-oriented design.",
      image: bookmytrainlogo,
      tags: ["Core Java", "OOP Concepts", "Java Collections Framework", "Exception Handling"],
      github: "https://github.com/ikramaly/BookMyTrain",
    },
    {
      id:2,
      title: "Garage Billing System",
      description:
        "Garage Billing System is a console-based application developed using Core Java to simplify garage billing and service management. It helps manage vehicle service details, calculate service charges, and generate bills based on the selected services. This project demonstrates my understanding of Object-Oriented Programming (OOP), Java Collections Framework, and business logic implementation through a practical, real-world application.",
      image: garagebillinglogo,
      tags: ["Core Java", "OOP Concepts", "Java Collections Framework"],
      github: "https://github.com/ikramaly/Garage-Billing-System",
    },
    {
      id: 3,
      title: "Car Rental System",
      description:
        "Car Rental System is a console-based application developed using Core Java to manage car rental operations efficiently. It helps users explore available cars, rent vehicles, calculate rental charges, and manage rental records. This project demonstrates my understanding of Object-Oriented Programming (OOP), Java Collections, and problem-solving through practical application development.",
      image: carrentallogo,
      tags: ["Core Java", "OOP Concepts", "Java Collections Framework"],
      github: "https://github.com/ikramaly/Car-Rental-System",
    },
    {
      id: 4,
      title: "Js Projects Collections",
      description:
        "JavaScript Mini Projects is a collection of small, interactive web applications developed using HTML, CSS, and JavaScript. This collection includes projects designed to improve user interaction, implement dynamic functionality, and solve everyday problems through simple web-based tools. Building these projects helped me strengthen my JavaScript fundamentals, DOM manipulation, event handling, and problem-solving skills while improving my understanding of front-end development.",
      image: jsprojectslogo,
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
    },
    // {
    //   id: 5,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    {
      id: 5,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
    },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  