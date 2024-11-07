"use client"
import styles from './page.module.sass'
import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'next/navigation';
import { PhotoCards } from "@/const";
import InfoDetailPhoto from '@/components/photoDetail/info'
import SliderDetailPhoto from '@/components/photoDetail/slider'
import BackButton from "@/components/elements/back";

export default function PhotoClient() {
    const { id } = useParams(); // Измените на деструктуризацию
    const [foundPhoto, setFoundPhoto] = useState(null);
    const imgRef = useRef(null);
    const [isVertical, setIsVertical] = useState(null);

    const findPhotById = (id) => {
        return PhotoCards.find(photo => photo.id === id); // Упростите функцию
    };

    const handleImageLoad = () => {
        if (imgRef.current) {
            const { naturalWidth, naturalHeight } = imgRef.current;
            setIsVertical(naturalWidth < naturalHeight);
        }
    };

    useEffect(() => {
        if (id) {
            const photo = findPhotById(id); // Просто передайте id
            setFoundPhoto(photo);
        }
    }, [id]);

    return (
        <div className='stock'>
            <BackButton />
            {foundPhoto && (
                <div className={`${styles["main-info"]} ${!isVertical ? styles["main-info_horizontal"] : ''}`}>
                    <img
                        ref={imgRef}
                        onLoad={handleImageLoad}
                        src={foundPhoto.img}
                        alt="" className={styles["main-info__img"]} />
                    <InfoDetailPhoto image={foundPhoto} />
                </div>
            )}
            <SliderDetailPhoto photo={foundPhoto} />
        </div>
    );
}
