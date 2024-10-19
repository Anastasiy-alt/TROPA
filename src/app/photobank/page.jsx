'use client';
import Photo from '@/components/cards/photo'
import {PhotoCards} from '@/const'
import React, {useEffect, useState} from "react";
import Masonry from "react-responsive-masonry";
import styles from './page.module.sass'
import Button from "@/components/elements/button";
import Tag from "@/components/elements/tag";
import BackButton from "@/components/elements/back";

export default function Photobank() {
    const [photoCount, setPhotoCount] = useState(10);
    const [tags, setTags] = useState([]);

    const handleMoreCards = () => {
        if (photoCount < PhotoCards.length) {
            setPhotoCount(photoCount + 10)
        }
    }

    const countTags = (tags) => {
        const tagCount = {};
        tags.forEach(tag => {
            tagCount[tag.title] = (tagCount[tag.title] || 0) + 1;
        });
        return tagCount;
    };

    const getTopTagsObjects = (tags, topCount) => {
        const tagCount = countTags(tags);
        return Object.entries(tagCount)
            .sort(([, countA], [, countB]) => countB - countA)
            .slice(0, topCount)
            .map(([title]) => tags.find(tag => tag.title === title));
    };

    useEffect(() => {
        let tagsArray = []
        PhotoCards.forEach(photo => {
            tagsArray = [...tagsArray, ...photo.tags]
        })
            const topTags = getTopTagsObjects(tagsArray, 5);
            setTags(topTags)
    }, []);

    return (
        <div className='stock'>
            <BackButton />
            <div className={styles['stock__title-block']}>
                <h2 className={styles.stock__title}>
                    Фото со всей России
                </h2>
                <div className={styles.stock__tags}>
                    Популярные теги:
                    {tags.slice(0, 5).map((tag, key) => (
                        <Tag data={tag} key={key} main={true}/>
                    ))}
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
