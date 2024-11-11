// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import styles from "./slider.module.sass";
// import {PhotoCards} from "@/const";
// import React, {useRef} from "react";
//
//
// export default function SliderDetailPhoto({photo}) {
//     const swiperRef = useRef(null);
//
//     return (
//         <div className={styles.sliderdetail}>
//             {photo && (
//                 <div>
//                     <p className={styles.sliderdetail__title}>В том же месте</p>
//                     <Swiper
//                         className={styles.sliderdetail__swiper}
//                         spaceBetween={20}
//                         slidesPerView={'auto'}
//                         ref={swiperRef}
//                     >
//                         {
//                             PhotoCards.filter(e => photo.regionId === e.regionId)
//                                 .filter(e => e.id !== photo.id)
//                                 .map((item, key) => (
//                                     <SwiperSlide className={styles.sliderdetail__slide} key={key}>
//                                         <a href={`/photo/${item.id}`} className={styles.sliderdetail__link}>
//                                             <img src={item.img} alt='' className={styles['sliderdetail__slide-img']}/>
//                                         </a>
//                                     </SwiperSlide>
//                                 ))
//                         }
//
//                     </Swiper>
//                 </div>
//             )
//             }
//         </div>
//     )
// }

// app/components/photoDetail/SliderDetailPhoto.js
"use client"; // Указываем, что это клиентский компонент

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./slider.module.sass";
import { PhotoCards } from "@/const";
import React, { useRef } from "react";

export default function SliderDetailPhoto({ photo }) {
    const swiperRef = useRef(null);

    if (!photo) return null; // Если нет фото, ничего не рендерим

    const filteredPhotos = PhotoCards.filter(e => photo.regionId === e.regionId && e.id !== photo.id);

    return (
        <div className={styles.sliderdetail}>
            <p className={styles.sliderdetail__title}>В том же месте</p>
            <Swiper
                className={styles.sliderdetail__swiper}
                spaceBetween={20}
                slidesPerView={'auto'}
                ref={swiperRef}
            >
                {filteredPhotos.map((item, key) => (
                    <SwiperSlide className={styles.sliderdetail__slide} key={key}>
                        <a href={`/photo/${item.id}`} className={styles.sliderdetail__link}>
                            <img src={item.img} alt='' className={styles['sliderdetail__slide-img']} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
