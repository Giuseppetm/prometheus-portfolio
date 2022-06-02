import Contact from "./Views/Contact";
import Hero from "./Views/Hero";
import Projects from "./Views/Projects";
import Footer from "./Views/Footer";
import Header from "./Components/Header";
import LateralMenu from "./Components/LateralMenu";
import { useState } from "react";

const App = () => {
  let [section, setSection] = useState(1);

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