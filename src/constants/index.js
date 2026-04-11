import ride from "../assets/ride.png"
import DisneyPlus from "../assets/disney.png";

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
            "Developed a public community forum where users can browse discussions without authentication. Implemented guarded actions for creating and editing threads, redirecting unauthenticated users to login and restoring navigation state post-authentication.",
        technologies: ["React.js", "Redux", "REST APIs"],
      },
      {
        title: "FAQ Management System",
        description:
            "Built a dynamic FAQ module consuming admin-configured data, rendering platform-specific answers (Android, iOS, Web) with category-based organization on the homepage.",
        technologies: ["React.js", "Redux"],
      },
      {
        title: "Performance Optimization",
        description:
            "Optimized rendering performance by minimizing unnecessary re-renders using memoization techniques. Maintained efficient data handling for large datasets using pagination, lazy loading, and debounced API calls.",
        technologies: ["React.js", "Memoization", "Debouncing"],
      },
      {
        title: "Multi-Tenant Platform (Subdomain System)",
        description:
            "Developed a configurable multi-tenant UI system allowing businesses to create personalized subdomain pages with custom branding (themes, colors, images, content). Implemented multiple modules including lead capture (follow-ups), appointment booking, batch management, and customer lifecycle tracking with filtering and status management.",
        technologies: ["React.js"],
      },
      {
        title: "Workflow Modules (Business Operations)",
        description:
            "Built interconnected modules for real-world workflows including follow-ups (lead tracking), appointments (date-based filtering), batch management (user enrollment), and customer management (active/inactive/pending states) driven by user actions from subdomain pages.",
        technologies: ["React.js", "REST APIs"],
      },
      {
        title: "File Upload Integration",
        description:
            "Integrated secure file upload flows by coordinating with backend-controlled AWS upload mechanisms, improving data security and reducing frontend exposure to storage operations.",
        technologies: ["React.js", "AWS"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Real time Ride Hailing",
    image: ride,
    description:
       "A full-stack Uber-style ride-hailing platform built using the MERN stack, implementing real-time ride lifecycle management with WebSockets for live status updates. Developed dynamic location tracking and synchronized UI state between user and captain. Designed scalable REST APIs with JWT-based authentication and secure payment integration using Razorpay with signature verification. Focused on maintaining consistent state transitions, efficient data flow, and responsive UI across the application.",
    technologies: ["React", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Razorpay", "REST APIs"],
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
    technologies: ["React", "Redux", "Styled Components", "Firebase"],
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
