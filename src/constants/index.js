import {
  backend,
  creator,
  web,
  school,
  textify,
  college,
  staysphere,
  weatherlens
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id:"projects",
    title:"projects"
  },
  
  {
    id: "contact",
    title: "Contact",
  }
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "BCA (Currently in Sem 3)",
    company_name: "Karim City College, Jamshedpur",
    icon: college, // You can replace this with the actual icon you want to use
    iconBg: "#383E56",
    date: "february 2025 - Present",
    points: [
      "Pursuing a Bachelor's degree in Computer Applications (BCA) with a focus on web development and software engineering.",
      "Learning core programming languages including Java and C++.",
      "Building projects using modern frameworks like React.js, Express, and Node.js.",
      "Engaging in coursework related to data structures, algorithms, and software development practices.",
    ],
  },
  {
    title: "12th Grade - PCM Stream",
    company_name: "SD DAV Public School, Jamtara, Jharkhand",
    icon: school, // You can replace this with the actual icon you want to use
    iconBg: "#E6DEDD",
    date: "2022-23",
    points: [
      "Completed 12th grade with a focus on Physics, Chemistry, and Mathematics (PCM).",
      "Developed strong problem-solving skills and analytical thinking through coursework in mathematics and science.",
      "Engaged in extracurricular activities like science fairs, coding competitions, and sports.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Textify",
    description:
      "Textify is a MERN stack real-time chat application that uses Socket.io for instant messaging and Tailwind CSS for a sleek UI. It features user authentication, seamless communication, and a responsive design for an enhanced chatting experience. 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    image: textify,
    source_code_link: "https://github.com/rajasneh/Textify",
    live_link: "https://textify-9mjy.onrender.com/",
  },
  {
    name: "StaySphere",
    description:
      "StaySphere is a hotel listing platform that includes authentication and authorization. It features an interactive map to help users locate hotels easily. It provides a seamless experience for users to explore and manage hotel listings. 🚀🏨",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: staysphere,
    source_code_link: "https://github.com/",
    live_link: "https://staysphere-8epx.onrender.com/listings",
  },
  {
    name: "WeatherLens",
    description:"WeatherLens is a sleek weather app built with React. It provides real-time weather updates, including temperature, humidity, and conditions for any location. With a clean UI and responsive design, WeatherLens ensures a smooth and interactive user experience. ☀️",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: weatherlens,
    source_code_link: "https://github.com/rajasneh/WeatherLens",
    live_link: "https://weatherlens.onrender.com/",
  },
];

export { services, experiences, testimonials, projects };
