import Contact from "./Views/Contact";
import Hero from "./Views/Hero";
import Projects from "./Views/Projects";
import Footer from "./Views/Footer";
import Header from "./Components/Header";
import LateralMenu from "./Components/LateralMenu";

const App = () => {
  return (
    <div className="App">
      <Header />
      <LateralMenu />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;