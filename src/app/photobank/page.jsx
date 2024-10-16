'use client';
import Photo from '@/components/cards/photo'
import {HashtagsData, PhotoCards} from '@/const'
import React, {useState} from "react";
import Masonry from "react-responsive-masonry";
import styles from './page.module.sass'
import Button from "@/components/elements/button";
import BackArrow from '@/assets/icon/back-arrow.svg'
import Tag from "@/components/elements/tag";

export default function Photobank() {
    const [photoCount, setPhotoCount] = useState(7);

    const handleMoreCards = () => {
        if (photoCount < PhotoCards.length) {
            setPhotoCount(photoCount + 6)
        }
    }

    return (
        <div className={styles.stock}>
            <BackArrow className={styles.stock__back}/>
            <div className={styles['stock__title-block']}>
                <div className={styles.stock__title}>
                    Фото со всей России
                </div>
                <div className={styles.stock__tags}>
                    Популярные теги:
                    {HashtagsData.slice(0, 5).map((tag, key) => (<Tag title={tag.title} key={key} main={true}/>))}
                </div>
            </div>
            <div className={styles.stock__photos}>
                <Masonry columnsCount={3} gutter={"30px"}>
                    {PhotoCards.slice(0, photoCount).map((photo, key) => (<Photo key={key} data={photo}/>))}
                </Masonry>
            </div>
            <Button
                onClick={handleMoreCards}
                text={'Ещё'}
            />
        </div>
    );
}
