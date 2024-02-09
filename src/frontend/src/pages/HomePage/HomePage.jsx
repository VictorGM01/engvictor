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

export default function HomePage() {
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
    </>
  );
}