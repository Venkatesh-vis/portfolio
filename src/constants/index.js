import ride from "../assets/ride.png"
import DisneyPlus from "../assets/disney.png";
import aiApp from "../assets/ailp.png";

export const PROFILE_CONTENT = `MERN Stack Developer with hands-on experience building end-to-end web applications, covering API design, backend architecture, and dynamic frontend systems. 

Developed scalable backend services using Node.js and Express, including REST API design, authentication flows with JWT, and structured data management with MongoDB. Built real-world features such as community platforms, multi-tenant subdomain systems, and business workflow modules including appointments, follow-ups, and customer management. 

On the frontend, implemented responsive and maintainable interfaces using React and Redux, focusing on reusable components, efficient state management, and optimized rendering. 

Strong in designing complete data flow across the stack, ensuring consistency, performance, and real-time user interaction.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "10/2024 - 10/2025",
    role: "React Developer",
    company: "SurveyHeart",
    tasks: [
      {
        title: "Community Platform",
        description:
          "Built a public community forum where users can explore discussions without authentication. Implemented protected actions for creating and editing threads, with login redirection and automatic restoration of previous navigation state after authentication.",
        technologies: ["React.js", "Redux", "REST APIs"],
      },
      {
        title: "FAQ Management System",
        description:
          "Developed a dynamic FAQ system powered by admin-managed content, supporting structured platform-specific sections (Web, iOS, Android) under each question, along with category-based organization for better content discoverability.",
        technologies: ["React.js", "Redux"],
      },
      {
        title: "Performance Optimization",
        description:
          "Enhanced frontend performance by reducing unnecessary re-renders using memoization techniques. Improved rendering efficiency for large datasets using pagination, lazy loading, and debounced API requests.",
        technologies: ["React.js", "Memoization", "Debouncing"],
      },
      {
        title: "Multi-Tenant Platform (Subdomain System)",
        description:
          "Designed and developed a multi-tenant architecture enabling businesses to create personalized subdomain pages with custom branding, including themes, colors, images, and content. Integrated modules for lead capture, appointment booking, batch management, and customer lifecycle tracking.",
        technologies: ["React.js"],
      },
      {
        title: "Workflow Modules (Business Operations)",
        description:
          "Built interconnected business workflows including lead follow-ups, appointment scheduling with date-based filtering, batch management for user enrollment, and customer management with status tracking (active, inactive, pending).",
        technologies: ["React.js", "REST APIs"],
      },
      {
        title: "File Upload Integration",
        description:
          "Integrated secure file upload system using backend-controlled AWS workflows, improving security by removing direct frontend upload access and ensuring safer media handling.",
        technologies: ["React.js", "AWS"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Learning Platform",
    image: aiApp,
    description:
      "A full-stack AI-powered learning platform built using the MERN stack, enabling users to upload study documents and generate AI-powered summaries, quizzes, flashcards, and contextual chat using Google Gemini AI. Designed scalable REST APIs with JWT authentication, modular Controller-Service architecture, and efficient MongoDB schema design. Built an interactive quiz engine, flashcard learning system, dashboard analytics, and responsive UI following a feature-based architecture with Redux Toolkit and TypeScript.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini AI",
      "JWT",
      "Axios",
      "REST APIs",
    ],
    webUrl: "https://ai-learning-assistant-peach.vercel.app/",
    companyUrl: "",
    androidUrl: "",
    iosUrl: "",
    projectName: "",
    isMobileApp: false,
    isReleased: true,
  },
  {
    title: "Real time Ride Hailing",
    image: ride,
    description:
      "A full-stack Uber-style ride-hailing platform built using the MERN stack, implementing real-time ride lifecycle management with WebSockets for live status updates. Developed dynamic location tracking and synchronized UI state between user and captain. Designed scalable REST APIs with JWT-based authentication and secure payment integration using Razorpay with signature verification. Focused on maintaining consistent state transitions, efficient data flow, and responsive UI across the application.",
    technologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Razorpay",
      "REST APIs",
    ],
    webUrl: "https://uber-three-pi.vercel.app/",
    companyUrl: "",
    androidUrl: "",
    iosUrl: "",
    projectName: "",
    isMobileApp: false,
    isReleased: true,
  },
  {
    title: "Disney Plus Clone",
    image: DisneyPlus,
    description:
      "Built a Disney Plus clone as a self-learning project to explore modern web technologies. Integrated Firebase for authentication and hosting, used Styled Components for dynamic UI styling, and leveraged Redux Toolkit for efficient state management.",
    technologies: [
      "React",
      "Redux",
      "Styled Components",
      "Firebase",
    ],
    webUrl: "https://disney-hotstar-eta.vercel.app/",
    companyUrl: "",
    androidUrl: "",
    iosUrl: "",
    projectName: "",
    isMobileApp: false,
    isReleased: true,
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 86884 22316",
  email: "venkateshvishwanadula257@gmail.com",
};
