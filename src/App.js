import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import Header from "./Components/Header";
import LateralMenu from "./Components/LateralMenu";
import PreCacheImg from "react-precache-img";
import { useState, useEffect } from "react";

const importAll = (r) => {
  let images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const App = () => {
  let [section, setSection] = useState(1);
  const images = importAll(
    require.context("./Images/", false, /\.(png|jpe?g|svg)$/)
  );

  const handleScroll = () => {
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    if (window.scrollY > contact.offsetTop - 400) {
      setSection(3);
    } else if (window.scrollY > projects.offsetTop - 400) {
      setSection(2);
    } else {
      setSection(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <PreCacheImg images={Object.values(images)} />
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
