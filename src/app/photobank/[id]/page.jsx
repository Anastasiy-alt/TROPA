"use client"
import {HashtagsData, PhotoCards, RegionDataCard} from "@/const";
import React, {useEffect, useState} from "react";
import {useParams} from 'next/navigation';
import styles from "@/app/photobank/page.module.sass";
import BackArrow from "@/assets/icon/back-arrow.svg";
import Tag from "@/components/elements/tag";
import Photo from "@/components/cards/photo";
import Button from "@/components/elements/button";
import Masonry from "react-responsive-masonry";


export default function PhotobankID() {
    const router = useParams();
    const slug = router.id;
    const [foundRegion, setFoundRegion] = useState(null);
    const [photoCount, setPhotoCount] = useState(10);

    const findRegionBySlug = (data) => {
        return data.RegionDataCard.find(region => region.slug === data.slug);
    };
    const handleMoreCards = () => {

        setPhotoCount(photoCount + 10)

    }

    useEffect(() => {
        if (slug) {
            const region = findRegionBySlug({RegionDataCard, slug});
            setFoundRegion(region);
        }
    }, [slug]);

    return (
        <div>
            {foundRegion && (
                <div className='stock'>
                    <BackArrow className='stock__back'/>
                    <div className={styles['stock__title-block']}>
                        <h2 className={styles.stock__title}>
                            {foundRegion.text}
                        </h2>
                        <div className={styles.stock__tags}>
                            Популярные теги:
                            {HashtagsData.slice(0, 5).map((tag, key) => (
                                <Tag title={tag.title} key={tag.slug} main={true}/>))}
                        </div>
                    </div>
                    <div className={styles.stock__photos}>
                        <Masonry columnsCount={3} gutter={"30px"}>
                            {PhotoCards.filter(e => foundRegion.slug === e.regionId).slice(0, photoCount).map((photo, key) =>
                                (<Photo key={`keyPhoto${photo.id}`} data={photo}/>))}
                        </Masonry>
                    </div>
                    {photoCount < PhotoCards.filter(e => foundRegion.slug === e.regionId).length && (
                        <Button
                            onClick={handleMoreCards}
                            text={'Ещё'}
                        />
                    )}

                </div>
            )}
        </div>
    );
}
