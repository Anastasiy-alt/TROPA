'use client';
import React from 'react';
import { useRef } from "react";
import {RegionDataCard, HashtagsData} from "@/const";
import styles from "./page.module.sass";
import CardsRegion from "@/components/cards/region";
import MainBanner from "@/components/main/banner";
import Search from "@/components/elements/search";
import Button from "@/components/elements/button";
import Tag from "@/components/elements/tag"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import Arrow from '@/assets/icon/arrow.svg'
export default function Home() {
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current) {
            console.log(swiperRef)
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    return (
        <div>
            <MainBanner/>
            <div className={styles.main__block}>
            <Search/>
                <div className={styles['swiper-tag']}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        className={styles['swiper-tag__slider']}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        ref={swiperRef}
                    >
                        {
                            HashtagsData.map((tag, key) => (
                                <SwiperSlide className={styles['swiper-tag__slide']} key={key}>
                                    <Tag title={tag.title}/>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <Arrow className={`${styles['swiper-tag__button']} ${styles['next-slider-button']}`} onClick={navigationNextRef} />
                    <Arrow className={`${styles['swiper-tag__button']} ${styles['prev-slider-button']}`} onClick={handlePrev} />
                </div>

            <div className={styles.main__cards}>
                {RegionDataCard.map((card, key) => (
                    <CardsRegion
                        card={card}
                        key={key}/>
                ))}
            </div>
            <Button
                text={'Ещё'}
            />
            </div>
        </div>
    );
}
