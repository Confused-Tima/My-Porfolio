import react from "react";
import styles from "./About.module.css";
import { getImageURL } from "../../utils.js";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.dataContainer}>
          <div className={styles.imageContainer}>
            <img src={getImageURL("about/rbp5.png")} alt="A guy working" />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contentDividerContainer}>
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
            </div>
            <div className={styles.contentDividerContainer}>
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
            </div>
            <div className={styles.contentDividerContainer}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
