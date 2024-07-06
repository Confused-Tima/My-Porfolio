import react from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import allHistory from "../../data/history.json";
import { getImageURL } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="title">Experience</h2>
      <div className={styles.container}>
        <ul className={styles.skillContainer}>
          {skills.map((skill) => (
            <li className={styles.skillItem} key={`skill-${skill.id}`}>
              <div>
                <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
        <ul className={styles.expContainer}>
          {allHistory.map((history) => (
            <li className={styles.exp} key={`history-${history.id}`}>
              <img
                src={getImageURL(history.imageSrc)}
                alt={`{history.organisation} Logo`}
              />
              <div>
                <h3
                  className={styles.companyRole}
                >{`${history.role}, ${history.organisation}`}</h3>
                <p
                  className={styles.tenure}
                >{`${history.startDate} - ${history.endDate}`}</p>
                <ul className={styles.expList}>
                  {history.experiences.map((exp) => (
                    <li>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
