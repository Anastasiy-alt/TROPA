"use client"
import React, {useEffect, useState} from "react";
import {useParams} from 'next/navigation';
import {PhotoCards, HashtagsData} from "@/const";
import styles from "@/app/photobank/page.module.sass";
import Photo from "@/components/cards/photo";
import Button from "@/components/elements/button";
import Masonry from "react-responsive-masonry";
import BackButton from "@/components/elements/back";

export default function TagPage() {
    const { id } = useParams();
    const [photosArr, setPhotosArr] = useState([]);
    const [activeTag, setActiveTag] = useState();
    const [photoCount, setPhotoCount] = useState(10);

    const handleMoreCards = () => {
        setPhotoCount(photoCount + 10)
    }

    useEffect(() => {
        const array = PhotoCards.filter(e => e.tags.some(tag => tag.slug === id))
        const tag = HashtagsData.filter(tag => tag.slug === id)
        setPhotosArr(array)
        setActiveTag(tag[0])
    }, [id]);
    return(
        <div>
            {id && (
                <div className='stock'>
                    <BackButton />
                    {activeTag && (
                        <div className={styles['stock__title-block']}>
                            <h2 className={styles.stock__title}>
                                #{activeTag.title}
                            </h2>
                        </div>
                    )}
                    <div className={styles.stock__photos}>
                        <Masonry columnsCount={3} gutter={"30px"}>
                            {photosArr.slice(0, photoCount).map((photo, key) =>
                                (<Photo key={`keyPhoto${photo.id}`} data={photo}/>))}
                        </Masonry>
                    </div>
                    {photoCount < photosArr.length && (
                        <Button
                            onClick={handleMoreCards}
                            text={'Ещё'}
                        />
                    )}
                </div>
            )}
        </div>
    )
}