import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.marginContainer}>
        <Navbar />
        <Hero />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
