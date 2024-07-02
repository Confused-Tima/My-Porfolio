import react from "react";
import styles from "./Hero.module.css";
import { getImageURL } from "../../utils.js";


export const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <div>
                <h1>Hi, I'm Amit Bisht</h1>
                <p>I'm a Full Stack developer with 2.5 years of experience using python. Reach out if you'd like to learn more.</p>
                <a href="mailto:thsibtima1999@gmail.com">Contact Me</a>
            </div>
            <img src={getImageURL("hero/lookAtTime.png")} alt="Image of myself" />
        </section>
    );
}