import React from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils.js";
import about from "../../data/about.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const initialActiveState = new Array(about.length).fill(false);

export const About = () => {
  return (
    <section className={`${styles.aboutSection} escapeBlur`} id="about">
      <div className={styles.container}>
        <h2 className="title">ABOUT</h2>
        <div className={styles.dataContainer}>
          <div className={styles.imageContainer}>
            <LazyLoadImage
              effect="blur"
              src={getImageURL("about/nbg1.png")}
              alt="A guy working"
            />
          </div>
          <ul className={styles.aboutItems}>
            {about.map((ele, index) => (
              <li key={`about-${ele.id}`} className={`${styles.aboutItem}`}>
                <LazyLoadImage
                  effect="blur"
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
