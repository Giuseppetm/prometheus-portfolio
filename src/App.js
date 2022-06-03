import Contact from "./Views/Contact";
import Hero from "./Views/Hero";
import Projects from "./Views/Projects";
import Footer from "./Views/Footer";
import Header from "./Components/Header";
import LateralMenu from "./Components/LateralMenu";
import { useState, useEffect } from "react";

const App = () => {
  let [section, setSection] = useState(1);

  const handleScroll = () => {
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    if (window.scrollY > projects.offsetTop) {
      setSection(2);
    } else if (window.scrollY > contact.offsetTop) {
      setSection(3);
    } else {
      setSection(1);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <LateralMenu section={section} />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;