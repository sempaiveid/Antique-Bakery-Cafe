import bgImage from "./assets/antique-cafe-bg-01.jpg";
import bgImage1 from "./assets/antique-cafe-bg-02.jpg";
import bgImage2 from "./assets/antique-cafe-bg-03.jpg";
import bgImage3 from "./assets/antique-cafe-bg-04.jpg";
import Intro from "./Intro";
import About from "./About";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";

function App() {
  return (
    <>
      <div
        id="intro"
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Nav />
        <Intro />
      </div>
      <div
        id="menu"
        className=" w-full bg-cover bg-center relative min-h-[1064px]"
        style={{
          backgroundImage: `url(${bgImage1})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Menu />
      </div>
      <div
        id="about"
        className=" w-full bg-cover bg-center relative min-h-[1064px]"
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundAttachment: "fixed",
        }}
      >
        <About />
      </div>
      <div
        id="contact"
        className=" w-full bg-cover bg-center relative min-h-[1064px]"
        style={{
          backgroundImage: `url(${bgImage3})`,
          backgroundAttachment: "fixed",
        }}
      >
        <Contact/>
        
      </div>
    </>
  );
}

export default App;
