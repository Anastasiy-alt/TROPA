import styles from './page.module.sass';
import { PhotoCards } from "@/const";
import InfoDetailPhoto from '@/components/photoDetail/info';
import SliderDetailPhoto from '@/components/photoDetail/slider';
import BackButton from "@/components/elements/back";
const findPhotoById = (id) => {
    return PhotoCards.find(photo => photo.id === id);
};
export default function PhotoClient({ id }) {
    const foundPhoto = findPhotoById(id); // Находим фото по id
    if (!foundPhoto) {
        return <div>Фото не найдено</div>; // Обработка случая, когда фото не найдено
    }
    const isVertical = foundPhoto.img.width < foundPhoto.img.height; // Предполагается, что у вас есть доступ к ширине и высоте изображения
    return (
        <div className='stock'>
            <BackButton />
            <div className={`${styles["main-info"]} ${!isVertical ? styles["main-info_horizontal"] : ''}`}>
                <img
                    src={foundPhoto.img}
                    alt="" className={styles["main-info__img"]}
                />
                <InfoDetailPhoto image={foundPhoto} />
            </div>
            <SliderDetailPhoto photo={foundPhoto} />
        </div>
    );
}
