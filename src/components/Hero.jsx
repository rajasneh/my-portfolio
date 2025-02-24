import { motion } from "framer-motion";
import { styles } from "../styles";
import my_img from "../assets/my_img.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[80px] lg:top-[140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        {/* LEFT SECTION - LINE */}
        <div className="flex flex-col justify-center items-center mt-5 hidden sm:block">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* RIGHT SECTION - TEXT + IMAGE */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start w-full sm:text-center lg:text-left">

          <div>
          <h1 className={`${styles.heroHeadText} text-white lg:mt-10`}>
            Hi, I'm <span className='text-[#915EFF]'>Asneh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 lg:mt-10 text-white-100`}>
          I develop full-stack web applications, from<br className='sm:block hidden' />
          frontend user interface to backend system.
          </p>
          <a
              href="/Asneh_s_Resume.pdf" // Change this to the actual resume path
              download
              className="mt-5 inline-flex items-center bg-[#915EFF] text-white font-bold py-2 px-5 rounded-md shadow-lg hover:bg-[#7a48e5] transition-all duration-300 block sm:inline-flex lg:mt-10"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download Resume
            </a>
      </div>


          {/* IMAGE SECTION */}
          <div className="relative flex-shrink-0 sm:ml-auto mt-5 sm:mt-0 lg:mt-20">
            {/* Image Background Shape (Visible on Large Screens) */}
            <svg
              width="180"
              height="180"
              viewBox="0 0 200 200"
              className="absolute -z-10 hidden sm:block "
            >
              <path
                fill="#915EFF"
                d="M43.1,-54.2C54.4,-46.1,61.7,-30.3,64.6,-14.4C67.5,1.4,66,17.4,58.9,30.3C51.8,43.2,39.2,53,24.3,61.5C9.3,70,-8.1,77.1,-24,72.8C-39.9,68.6,-54.4,53,-64.1,35.8C-73.8,18.5,-78.7,-0.4,-74.4,-18.6C-70.1,-36.8,-56.6,-54.3,-40.1,-62.7C-23.5,-71,-4.9,-70.2,10.9,-65.1C26.8,-60,38.7,-50.3,43.1,-54.2Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Image (Large Screens) */}
            <img
              src={my_img}
              alt="Adrian's Profile"
              className="hidden sm:block w-80 h-80 object-cover rounded-full border-4 border-[#915EFF] shadow-lg"
            />

            {/* Image (Small Screens - Moves Below Text) */}
            <img
              src={my_img}
              alt="Adrian's Profile"
              className="block sm:hidden w-[250px] h-auto object-cover rounded-full border-4 border-[#915EFF] shadow-lg mt-5"
            />
          </div>
        </div>
      </div>

      {/* MOUSE SCROLL ICON */}
      <div className="absolute xs:bottom-2 bottom-4 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
