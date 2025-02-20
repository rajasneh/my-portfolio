import {
  BiLogoAdobe,
  BiLogoBootstrap,
  BiLogoCPlusPlus,
  BiLogoGit,
  BiLogoNetlify,
} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiPostman,
  SiAdobephotoshop,
  SiExpress,
  SiRender,
  SiVercel,
  SiSocketdotio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { motion } from "framer-motion";

// Different variants for each icon to float in various directions
const iconVariants = {
  initial: { x: 0, y: 0 },
  animate: (index) => ({
    x: [0, (Math.random() - 0.5) * 20, 0], // Random horizontal movement
    y: [0, (Math.random() - 0.5) * 20, 0], // Random vertical movement
    transition: {
      duration: 2 + index * 0.5, // Staggered duration for a nice effect
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const Technologies = () => {
  return (
    <div className="pb-24" id="skills">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center"
      >
        {[
          {
            Icon: SiMongodb,
            color: "text-green-500",
            link: "https://www.mongodb.com/",
          },
          {
            Icon: SiExpress,
            color: "text-gray-500",
            link: "https://expressjs.com/",
          },
          {
            Icon: RiReactjsLine,
            color: "text-cyan-500",
            link: "https://reactjs.org/",
          },
          {
            Icon: FaNodeJs,
            color: "text-green-500",
            link: "https://nodejs.org/",
          },
          {
            Icon: SiSocketdotio,
            color: "text-gray-900",
            link: "https://socket.io/",
          }, // ✅ Socket.IO added
          {
            Icon: FaJava,
            color: "text-red-500",
            link: "https://www.java.com/",
          },
          {
            Icon: BiLogoCPlusPlus,
            color: "text-blue-600",
            link: "https://isocpp.org/",
          }, // Added link for C++
          {
            Icon: BiLogoGit,
            color: "text-orange-600",
            link: "https://git-scm.com/",
          },
          {
            Icon: SiPostman,
            color: "text-orange-500",
            link: "https://www.postman.com/",
          },
          {
            Icon: BiLogoNetlify,
            color: "text-blue-400",
            link: "https://www.netlify.com/",
          },
          { Icon: SiVercel, color: "text-black", link: "https://vercel.com/" }, // Added Vercel
          {
            Icon: SiRender,
            color: "text-blue-500",
            link: "https://render.com/",
          }, // Added Render// Added link for Netlify
          { Icon: DiRedis, color: "text-red-700", link: "https://redis.io/" },
          {
            Icon: BiLogoAdobe,
            color: "text-red-600",
            link: "https://www.adobe.com/",
          }, // Added link for Adobe
          {
            Icon: BiLogoBootstrap,
            color: "text-purple-600",
            link: "https://getbootstrap.com/",
          }, // Updated color and added link for Bootstrap
          {
            Icon: SiAdobephotoshop,
            color: "text-blue-400",
            link: "https://www.adobe.com/products/photoshop.html",
          },
        ].map(({ Icon, color, link }, index) => (
          <motion.div
            key={index}
            className={`p-4`}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            custom={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon className={`text-7xl ${color}`} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
