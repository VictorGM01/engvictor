import Header from "../../components/common/Header/Header";
import Intro from "../../sections/Intro/Intro";
import About from "../../sections/About/About";
import Experience from "../../sections/Experience/Experience";
import Services from "../../sections/Services/Services";
import Partners from "../../sections/Partners/Partners";
import ProjectsPreview from "../../sections/ProjectsPreview/ProjectsPreview";
import Technologies from "../../sections/Technologies/Technologies";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../components/common/Footer/Footer";
import { useState } from "react";
import GoTop from "../../components/common/GoTop/GoTop";


export default function HomePage() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Services />
      <Partners />
      <ProjectsPreview />
      <Technologies />
      <Contact />
      <Footer />
      {pageYPosition > 600 && <GoTop />}
    </>
  );
}