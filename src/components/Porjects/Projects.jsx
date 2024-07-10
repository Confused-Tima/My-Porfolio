import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageURL } from "../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Projects = () => {
  return (
    <section className="marginContainer" id="projects">
      <h2 className="title">Projects</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <div className={styles.card}>
            <LazyLoadImage
              effect="blur"
              src={getImageURL(project.imageSrc)}
              alt={`${project.title} Image`}
              className={styles.img}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.techStack}>
                {project.techStack.map(stackName => (
                    <li>{stackName}</li>
                ))}
            </ul>
            <div className={styles.buttons}>
              <a href={project.demoURL} target="_blank">
                Demo
              </a>
              <a href={project.sourceURL} target="_blank">
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
