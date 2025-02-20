import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-6 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p className="text-sm text-gray-400 mt-5 mb-3">A Fullstack focused Web Developer building the Frontend and Backend  of Websites <br/> and Web Applications that leads to the success of the overall product</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/rajasneh" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:text-[#7a48e5] text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/asneh-raj-2080a1293/" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:text-[#7a48e5] text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/rajasneh28/" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:text-[#7a48e5] text-2xl">
            <FaInstagram />
          </a>
          <a href="rajasneh91@gmail.com" className="text-[#915EFF] hover:text-[#7a48e5] text-2xl">
            <FaEnvelope />
          </a>
        </div>

      </div>
      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-10 mb-3">
        &copy; {new Date().getFullYear()} Asneh Raj. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
