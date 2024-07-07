import react, { useState } from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils.js";
import about from "../../data/about.json";

const initialActiveState = new Array(about.length).fill(false);

export const About = () => {
  const [isActive, isActiveChange] = useState(initialActiveState);
  const [isBlur, isBlurChange] = useState(initialActiveState);

  const applyAnimation = (index) => {
    isActiveChange((prev) => {
      return prev.map((_, i) => {
        return i == index ? true : false;
      });
    });

    isBlurChange((prev) => {
      return prev.map((_, i) => {
        return i != index ? true : false;
      });
    });
  };

  function removeAnimations() {
    isActiveChange(initialActiveState);
    isBlurChange(initialActiveState);
  }

  return (
    <section className={`${styles.aboutSection} escapeBlur`} id="about">
      <div className={styles.container}>
        <h2 className="title">ABOUT</h2>
        <div className={styles.dataContainer}>
          <div className={styles.imageContainer}>
            <img src={getImageURL("about/nbg1.png")} alt="A guy working" />
          </div>
          <ul className={styles.aboutItems}>
            {about.map((ele, index) => (
              <li
                key={`about-${ele.id}`}
                className={`${styles.aboutItem} 
                ${isActive[index] && styles.active}
                ${isBlur[index] && styles.blurItem}
                `}
                onMouseEnter={() => applyAnimation(index)}
                onMouseLeave={removeAnimations}
                onTouchStart={() => applyAnimation(index)}
                onTouchEnd={removeAnimations}
                // onMouseEnter={() => applyAnimation(index)}
              >
                <img
                  src={getImageURL(ele.imageSrc)}
                  alt={`${ele.title} Icon`}
                />
                <div>
                  <h3>{ele.title}</h3>
                  <p>{ele.quote}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
