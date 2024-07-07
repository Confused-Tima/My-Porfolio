import react, { useRef, useEffect } from "react";
import styles from "./Scroller.module.css";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";

export const Scroller = ({ isReducedMotion }) => {
  return (
    <section className={`marginContainer ${styles.scrollContainer}`}>
      <h2 className="title">SKILLS</h2>
      <div className={styles.scrollerSection} data-animated={!isReducedMotion}>
        <ul
          className={styles.infiniteScroll}
          data-direction="left"
          data-speed="slow"
        >
          {skills.map((ele, i) => (
            <li className={styles.scrollCard} key={`scroll-${i}`}>
              {/* {ele.title} */}
              <img src={getImageURL(ele.imageSrc)} alt={ele.title} />
            </li>
          ))}
          {skills.map((ele, i) => (
            <li
              className={styles.scrollCard}
              key={`scroll-${i + skills.length}`}
              aria-hidden="true"
            >
              {/* {ele.title} */}
              <img src={getImageURL(ele.imageSrc)} alt={ele.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
