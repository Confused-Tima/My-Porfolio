import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Scroller } from "./components/Scroller/Scroller.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Porjects/Projects.jsx";

const isReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.marginContainer}>
        <Navbar />
        <Hero />
        <About />
        <Scroller isReducedMotion={isReducedMotion} />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
