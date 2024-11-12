// "use client"
// import {PhotoCards, RegionDataCard} from "@/const";
// import React, {useEffect, useState} from "react";
// import {useParams} from 'next/navigation';
// import styles from "@/app/photobank/page.module.sass";
// import Tag from "@/components/elements/tag";
// import Photo from "@/components/cards/photo";
// import Button from "@/components/elements/button";
// import Masonry from "react-responsive-masonry";
// import BackButton from "@/components/elements/back";
//
//
// export default function PhotobankID() {
//     const router = useParams();
//     const slug = router.id;
//     const [foundRegion, setFoundRegion] = useState(null);
//     const [photoCount, setPhotoCount] = useState(10);
//     const [photoArray, setPhotoArray] = useState([])
//     const [tags, setTags] = useState([]);
//
//     const findRegionBySlug = (data) => {
//         return data.RegionDataCard.find(region => region.slug === data.slug);
//     };
//     const handleMoreCards = () => {
//         setPhotoCount(photoCount + 10)
//     }
//
//     const countTags = (tags) => {
//         const tagCount = {};
//         tags.forEach(tag => {
//             tagCount[tag.title] = (tagCount[tag.title] || 0) + 1;
//         });
//         return tagCount;
//     };
//
//     const getTopTagsObjects = (tags, topCount) => {
//         const tagCount = countTags(tags);
//         return Object.entries(tagCount)
//             .sort(([, countA], [, countB]) => countB - countA)
//             .slice(0, topCount)
//             .map(([title]) => tags.find(tag => tag.title === title));
//     };
//
//     useEffect(() => {
//         if (slug) {
//             const region = findRegionBySlug({RegionDataCard, slug});
//             setFoundRegion(region);
//             const data = PhotoCards.filter(e => region.slug === e.regionId)
//             setPhotoArray(data)
//             let tagsArray = []
//             data.forEach(photo => {
//                 tagsArray = [...tagsArray, ...photo.tags]
//             })
//             const topTags = getTopTagsObjects(tagsArray, 5);
//             setTags(topTags)
//         }
//     }, [slug]);
//
//     return (
//         <div>
//             {foundRegion && (
//                 <div className='stock'>
//                     <BackButton />
//                     <div className={styles['stock__title-block']}>
//                         <h2 className={styles.stock__title}>
//                             {foundRegion.text}
//                         </h2>
//                         {tags && (
//                             <div className={styles.stock__tags}>
//                                 Популярные теги:
//
//                                 {tags.slice(0, 5).map((tag, key) => (
//                                     <Tag data={tag} key={tag.slug} main={true}/>))}
//                             </div>)}
//                     </div>
//                     <div className={styles.stock__photos}>
//                         <Masonry columnsCount={3} gutter={"30px"}>
//                             {photoArray.slice(0, photoCount).map((photo, key) =>
//                                 (<Photo key={`keyPhoto${photo.id}`} data={photo}/>))}
//                         </Masonry>
//                     </div>
//                     {photoCount < PhotoCards.filter(e => foundRegion.slug === e.regionId).length && (
//                         <Button
//                             onClick={handleMoreCards}
//                             text={'Ещё'}
//                         />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

import { PhotoCards, RegionDataCard } from "@/const";
import styles from "@/app/photobank/page.module.sass";
import Tag from "@/components/elements/tag";
import Photo from "@/components/cards/photo";
import Button from "@/components/elements/button";
import BackButton from "@/components/elements/back";

const PhotobankID = ({ foundRegion, photoArray, tags, photoCount }) => {
    const handleMoreCards = () => {
        console.log('here')
    }
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
                        {photoArray.map((photo) => (
                            <Photo key={`keyPhoto${photo.id}`} data={photo} />
                        ))}
                    </div>
                    {photoCount < photoArray.length && (
                        <Button
                            // onClick={handleMoreCards}
                            text={'Ещё'}
                            disabled // Кнопка отключена на сервере
                        />
                    )}
                </div>
            )}
        </div>
    );
};

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

export async function generateStaticParams() {
    const paths = RegionDataCard.map(region => ({
        id: region.slug
    }));
    return paths;
}

export async function getData(slug) {
    const foundRegion = RegionDataCard.find(region => region.slug === slug);
    const photoArray = PhotoCards.filter(e => foundRegion.slug === e.regionId);
    let tagsArray = [];
    photoArray.forEach(photo => {
        tagsArray = [...tagsArray, ...photo.tags];
    });
    const topTags = getTopTagsObjects(tagsArray, 5);
    return { foundRegion, photoArray, topTags };
}

export default async function Page({ params }) {
    const { id } = params;
    const { foundRegion, photoArray, topTags } = await getData(id);

    // Определяем, сколько фотографий отображать на странице
    const initialPhotoCount = 100; // Первоначальное количество фотографий для отображения

    return (
        <PhotobankID
            foundRegion={foundRegion}
            photoArray={photoArray}
            tags={topTags}
            photoCount={initialPhotoCount} // Передаем начальное количество фотографий
        />
    );
}
