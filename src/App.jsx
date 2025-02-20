import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas } from "./components";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
