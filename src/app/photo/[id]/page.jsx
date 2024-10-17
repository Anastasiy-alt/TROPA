"use client"
import styles from './page.module.sass'
import BackArrow from "@/assets/icon/back-arrow.svg";
import React, {useEffect, useState} from "react";
import {useParams} from 'next/navigation';
import {PhotoCards} from "@/const";
import InfoDetailPhoto from '@/components/photoDetail/info'
import SliderDetailPhoto from '@/components/photoDetail/slider'
export default function PhotoId() {

    const router = useParams();
    const id = router.id;
    const [foundPhoto, setFoundPhoto] = useState(null);

    const findPhotById = (data) => {
        return data.PhotoCards.find(photo => photo.id === data.id);
    };

    useEffect(() => {
        if (id) {
            const photo = findPhotById({PhotoCards, id});
            setFoundPhoto(photo)
            console.log(photo, id);
        }
    }, [id]);

    return(
        <div className='stock'>
            <BackArrow className='stock__back'/>
            {foundPhoto && (
                <div className={styles["main-info"]}>
                    <img
                        src={foundPhoto.img}
                        alt="" className={styles["main-info__img"]}/>
                    <InfoDetailPhoto/>
                </div>

            )}
            {/*<PhotoDetailSlider/>*/}
        </div>
    )
}