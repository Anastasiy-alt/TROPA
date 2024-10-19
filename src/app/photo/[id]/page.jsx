"use client"
import styles from './page.module.sass'
import React, {useEffect, useState} from "react";
import {useParams} from 'next/navigation';
import {PhotoCards} from "@/const";
import InfoDetailPhoto from '@/components/photoDetail/info'
import SliderDetailPhoto from '@/components/photoDetail/slider'
import BackButton from "@/components/elements/back";

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
        }
    }, [id]);

    return(
        <div className='stock'>
            <BackButton />
            {foundPhoto && (
                <div className={styles["main-info"]}>
                    <img
                        src={foundPhoto.img}
                        alt="" className={styles["main-info__img"]}/>
                    <InfoDetailPhoto image={foundPhoto}/>
                </div>
            )}
            <SliderDetailPhoto photo={foundPhoto} />
        </div>
    )
}