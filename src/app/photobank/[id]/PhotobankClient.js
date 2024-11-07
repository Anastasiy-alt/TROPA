"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import styles from "@/app/photobank/page.module.sass";
import Tag from "@/components/elements/tag";
import Photo from "@/components/cards/photo";
import Button from "@/components/elements/button";
import Masonry from "react-responsive-masonry";
import BackButton from "@/components/elements/back";

const PhotobankClient = ({ photoCards, regionDataCard }) => {
    const router = useParams();
    const slug = router.id;
    const [foundRegion, setFoundRegion] = useState(null);
    const [photoCount, setPhotoCount] = useState(10);
    const [photoArray, setPhotoArray] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (slug) {
            const region = regionDataCard.find(region => region.slug === slug);
            setFoundRegion(region);
            const data = photoCards.filter(e => region.slug === e.regionId);
            setPhotoArray(data);
            let tagsArray = [];
            data.forEach(photo => {
                tagsArray = [...tagsArray, ...photo.tags];
            });
            const topTags = getTopTagsObjects(tagsArray, 5);
            setTags(topTags);
        }
    }, [slug]);

    const getTopTagsObjects = (tags, topCount) => {
        const tagCount = {};
        tags.forEach(tag => {
            tagCount[tag.title] = (tagCount[tag.title] || 0) + 1;
        });
        return Object.entries(tagCount)
            .sort(([, countA], [, countB]) => countB - countA)
            .slice(0, topCount)
            .map(([title]) => tags.find(tag => tag.title === title));
    };

    const handleMoreCards = () => {
        setPhotoCount(photoCount + 10);
    };

    return (
        <div>
            {foundRegion && (
                <div className='stock'>
                    <BackButton />
                    <div className={styles['stock__title-block']}>
                        <h2 className={styles.stock__title}>
                            {foundRegion.text}
                        </h2>
                        {tags && (
                            <div className={styles.stock__tags}>
                                Популярные теги:
                                {tags.slice(0, 5).map((tag) => (
                                    <Tag data={tag} key={tag.slug} main={true} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.stock__photos}>
                        <Masonry columnsCount={3} gutter={"30px"}>
                            {photoArray.slice(0, photoCount).map((photo) => (
                                <Photo key={photo.id} data={photo} />
                            ))}
                        </Masonry>
                    </div>
                    {photoCount < photoArray.length && (
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

export default PhotobankClient;

