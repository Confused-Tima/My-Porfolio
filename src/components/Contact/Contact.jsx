import React from "react";
import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Contact() {
  return (
    <footer id="contact" className={styles.contactContainer}>
      <div className={styles.heading}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul>
        <li>
          <LazyLoadImage
            effect="blur"
            src={getImageURL("contact/emailIcon.png")}
            alt="Email Icon"
          />
          <a target="_blank" href="mailto:thsibtima1999@gmail.com">
            thsibtima1999@gmail.com
          </a>
        </li>
        <li>
          <LazyLoadImage
            effect="blur"
            src={getImageURL("contact/githubIcon.png")}
            alt="Github Icon"
          />
          <a
            target="_blank"
            href="https://github.com/Confused-Tima?tab=repositories"
          >
            GitHub
          </a>
        </li>
        <li>
          <LazyLoadImage
            effect="blur"
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
          />
          <a target="_blank" href="linkedin.com/in/amit-bisht-4b07b3201">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
