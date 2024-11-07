// "use client"
// import React, {useEffect, useState} from "react";
// import {useParams} from 'next/navigation';
// import {PhotoCards, HashtagsData} from "@/const";
// import styles from "@/app/photobank/page.module.sass";
// import Photo from "@/components/cards/photo";
// import Button from "@/components/elements/button";
// import Masonry from "react-responsive-masonry";
// import BackButton from "@/components/elements/back";
//
// export default function TagPage() {
//     const router = useParams();
//     const slug = router.id;
//     const [photosArr, setPhotosArr] = useState([]);
//     const [activeTag, setActiveTag] = useState();
//     const [photoCount, setPhotoCount] = useState(10);
//
//     const handleMoreCards = () => {
//         setPhotoCount(photoCount + 10)
//     }
//
//     useEffect(() => {
//         const array = PhotoCards.filter(e => e.tags.some(tag => tag.slug === slug))
//         const tag = HashtagsData.filter(tag => tag.slug === slug)
//         setPhotosArr(array)
//         setActiveTag(tag[0])
//     }, [slug]);
//     return(
//         <div>
//             {slug && (
//                 <div className='stock'>
//                     <BackButton />
//                     {activeTag && (
//                         <div className={styles['stock__title-block']}>
//                             <h2 className={styles.stock__title}>
//                                 #{activeTag.title}
//                             </h2>
//                         </div>
//                     )}
//                     <div className={styles.stock__photos}>
//                         <Masonry columnsCount={3} gutter={"30px"}>
//                             {photosArr.slice(0, photoCount).map((photo, key) =>
//                                 (<Photo key={`keyPhoto${photo.id}`} data={photo}/>))}
//                         </Masonry>
//                     </div>
//                     {photoCount < photosArr.length && (
//                         <Button
//                             onClick={handleMoreCards}
//                             text={'Ещё'}
//                         />
//                     )}
//                 </div>
//             )}
//         </div>
//     )
// }
// app/tags/[id]/page.js
import React from "react";
import { PhotoCards, HashtagsData } from "@/const";
import styles from "@/app/photobank/page.module.sass";
import Photo from "@/components/cards/photo";
import Button from "@/components/elements/button";
import Masonry from "react-responsive-masonry";
import BackButton from "@/components/elements/back";
const TagPage = ({ photosArr, activeTag }) => {
    const [photoCount, setPhotoCount] = React.useState(10);

    const handleMoreCards = () => {
        setPhotoCount(photoCount + 10);
    };
    return (
        <div>
            {activeTag && (
                <div className='stock'>
                    <BackButton />
                    <div className={styles['stock__title-block']}>
                        <h2 className={styles.stock__title}>
                            #{activeTag.title}
                        </h2>
                    </div>
                    <div className={styles.stock__photos}>
                        <Masonry columnsCount={3} gutter={"30px"}>
                            {photosArr.slice(0, photoCount).map((photo) => (
                                <Photo key={`keyPhoto${photo.id}`} data={photo} />
                            ))}
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
    );
};
export async function generateStaticParams() {
    const paths = HashtagsData.map(tag => ({
        id: tag.slug
    }));
    return paths;
}
export async function getData(slug) {
    const photosArr = PhotoCards.filter(e => e.tags.some(tag => tag.slug === slug));
    const activeTag = HashtagsData.find(tag => tag.slug === slug);
    return { photosArr, activeTag };
}
export default async function Page({ params }) {
    const { id } = params;
    const { photosArr, activeTag } = await getData(id);

    return <TagPage photosArr={photosArr} activeTag={activeTag} />;
}
