import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import allHistory from "../../data/history.json";
import { getImageURL } from "../../utils";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Experience = () => {
  return (
    <section id="experience" className="marginContainer">
      <h2 className="title">Experience</h2>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-nav-button-next",
          prevEl: ".swiper-nav-button-prev",
          clickable: true,
        }}
        className={styles.swiperContainer}
      >
        {allHistory.map((ele) => (
          <SwiperSlide className={styles.swiperCard}>
            <div className={styles.historyContent}>
              <LazyLoadImage
                src={getImageURL(ele.imageSrc)}
                alt={`${ele.organisation} Icon`}
              />
              <h3>{`${ele.role}, ${ele.organisation}`}</h3>
              <p>{`${ele.startDate} - ${ele.endDate}`}</p>
              <ul className={styles.experiences}>
                {ele.experiences.map((exp) => (
                  <li>{exp}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
        <div className={`${styles.swiperPagination} swiper-pagination `}></div>
      </Swiper>
    </section>
  );
};
