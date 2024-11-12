// "use client"
// import styles from './page.module.sass'
// import React, {useEffect, useRef, useState} from "react";
// import {useParams} from 'next/navigation';
// import {PhotoCards} from "@/const";
// import InfoDetailPhoto from '@/components/photoDetail/info'
// import SliderDetailPhoto from '@/components/photoDetail/slider'
// import BackButton from "@/components/elements/back";
//
// export default function PhotoId() {
//
//     const router = useParams();
//     const id = router.id;
//     const [foundPhoto, setFoundPhoto] = useState(null);
//     const imgRef = useRef(null);
//     const [isVertical, setIsVertical] = useState(null);
//     const findPhotById = (data) => {
//         return data.PhotoCards.find(photo => photo.id === data.id);
//     };
//
//     const handleImageLoad = () => {
//         if (imgRef.current) {
//             const { naturalWidth, naturalHeight } = imgRef.current;
//             setIsVertical(naturalWidth < naturalHeight)
//         }
//     };
//
//     useEffect(() => {
//         if (id) {
//             const photo = findPhotById({PhotoCards, id});
//             setFoundPhoto(photo)
//         }
//     }, [id]);
//
//     return(
//         <div className='stock'>
//             <BackButton />
//             {foundPhoto && (
//                 <div className={`${styles["main-info"]} ${!isVertical ? styles["main-info_horizontal"] : ''}`}>
//                     <img
//                         ref={imgRef}
//                         onLoad={handleImageLoad}
//                         src={foundPhoto.img}
//                         alt="" className={styles["main-info__img"]}/>
//                     <InfoDetailPhoto image={foundPhoto}/>
//                 </div>
//             )}
//             <SliderDetailPhoto photo={foundPhoto} />
//         </div>
//     )
// }

import styles from './page.module.sass';
import { PhotoCards } from "@/const";
import InfoDetailPhoto from '@/components/photoDetail/info';
import SliderDetailPhoto from '@/components/photoDetail/slider';
import BackButton from "@/components/elements/back";

const PhotoId = ({ foundPhoto, isVertical }) => {
    return (
        <div className='stock'>
            <BackButton />
            {foundPhoto && (
                <div className={`${styles["main-info"]} ${!isVertical ? styles["main-info_horizontal"] : ''}`}>
                    <img
                        src={foundPhoto.img}
                        alt="" className={styles["main-info__img"]}/>
                    {/*<InfoDetailPhoto image={foundPhoto} />*/}
                </div>
            )}
            {/*<SliderDetailPhoto photo={foundPhoto} />*/}
        </div>
    );
};

export async function generateStaticParams() {
    const paths = PhotoCards.map(photo => ({
        id: photo.id.toString(),
    }));
    return paths;
}

export async function getData(id) {
    const foundPhoto = PhotoCards.find(photo => photo.id.toString() === id.toString());
    return foundPhoto || null; // Return null if photo not found
}

export default async function Page({ params }) {
    const { id } = params;
    const foundPhoto = await getData(id);

    if (!foundPhoto) {
        return {
            notFound: true, // Trigger 404 page if photo is not found
        };
    }

    // Предположим, что мы знаем ширину и высоту изображения заранее
    const { naturalWidth, naturalHeight } = foundPhoto; // Замените на фактические размеры изображения
    const isVertical = naturalWidth < naturalHeight;

    return <PhotoId foundPhoto={foundPhoto} isVertical={isVertical} />;
}
