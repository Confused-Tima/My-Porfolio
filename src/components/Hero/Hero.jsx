import react from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils.js";

export const Hero = () => {
  const rootElement = document.documentElement;
  const rootFontSize = window.getComputedStyle(rootElement).fontSize;
  console.log(`Root Element Font Size: ${rootFontSize}`);

  return (
    <section className={styles.heroContainer}>
      <div className="escapeBlur">
        <h1 className={styles.title}>Hi, I'm Amit Bisht</h1>
        <p className={styles.description}>
          I'm a Full Stack developer with 2.5 years of experience using python.
          Reach out if you'd like to learn more.
        </p>
        <button
          className={styles.contactBtn}
          href="mailto:thsibtima1999@gmail.com"
        >
          Contact Me
        </button>
      </div>
      <div className="escapeBlur">
        <img
          className={styles.image}
          src={getImageURL("hero/officeChill.png")}
          alt="Image of myself"
        />
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
