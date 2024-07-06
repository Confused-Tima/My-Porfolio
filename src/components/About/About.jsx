import react from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils.js";

export const About = () => {
  return (
    <section className={`${styles.aboutSection} escapeBlur`} id="about">
      <div className={styles.container}>
        <h2 className="title">ABOUT</h2>
        <div className={styles.dataContainer}>
          <div className={styles.imageContainer}>
            <img src={getImageURL("about/nbg1.png")} alt="A guy working" />
          </div>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/serverIcon.png")}
                alt="Server Icon"
              />
              <div>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end
                  systems and APIs.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/uiIcon.png")}
                alt="AWS Console Icon"
              />
              <div>
                <h3>AWS Developer</h3>
                <p>
                  Experience in leveraging multiple AWS services to build
                  scalable and secure applications.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageURL("about/cursorIcon.png")}
                alt="Cursor Icon for front end"
              />
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a front-end developer with experience in building
                  responsive and optimised sites.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
