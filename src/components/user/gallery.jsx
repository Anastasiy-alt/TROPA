// import Button from "@/components/elements/button";
// import styles from "./gallery.module.sass";
// import {useState} from "react";
//
// export default function UserGallery({photos}) {
//     const [countPhoto, setCountPhoto] = useState(8);
//     const openPopup = () => {
//
//     }
//
//     const moreButton = () => {
//         setCountPhoto(countPhoto + 6)
//     }
//     return (
//         <div className={styles.gallery}>
//             <div className={styles['gallery__title-block']}>
//                 <p className={styles.gallery__title}>Фотогаллерея</p>
//                 <Button text={'Загрузить фотографии'} plus={true} white={true} onClick={openPopup}/>
//             </div>
//             {/*<div className={styles.gallery__tags}>*/}
//             {/*    <Tag text="item" v-for="(item, idx) in tags" disable="true" link="''"/>*/}
//             {/*</div>*/}
//             <div className={styles['gallery__photo-block']}>
//                 {photos.slice(0, countPhoto).map((photo, key) => (
//                     <a href={`/photo/${photo.id}`} key={key} className={styles.gallery__link}>
//                         <img className={styles.gallery__img} src={photo.img} alt=""/>
//                     </a>
//                 ))}
//
//             </div>
//             {countPhoto < photos.length && (
//                 <div className={styles.gallery__button}>
//                     <Button text={'Ещё'} onClick={moreButton}/>
//                 </div>
//             )}
//         </div>
//     )
// }

import Button from "@/components/elements/button";
import styles from "./gallery.module.sass";
export default function UserGallery({ photos, initialCount = 8 }) {
    // Определяем количество фотографий для отображения
    const displayedPhotos = photos.slice(0, initialCount);
    const openPopup = () => {
        // Логика для открытия попапа загрузки фотографий
    };
    return (
        <div className={styles.gallery}>
            <div className={styles['gallery__title-block']}>
                <p className={styles.gallery__title}>Фотогаллерея</p>
                <Button text={'Загрузить фотографии'} plus={true} white={true} onClick={openPopup} />
            </div>
            <div className={styles['gallery__photo-block']}>
                {displayedPhotos.map((photo) => (
                    <a href={`/photo/${photo.id}`} key={photo.id} className={styles.gallery__link}>
                        <img className={styles.gallery__img} src={photo.img} alt="" loading="lazy" />
                    </a>
                ))}
            </div>
            {initialCount < photos.length && (
                <div className={styles.gallery__button}>
                    <Button text={'Ещё'} onClick={() => window.location.reload()} />
                </div>
            )}
        </div>
    );
}
