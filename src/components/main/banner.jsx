import styles from "./main.module.sass";
import BannerArrow from "@/assets/icon/banner-arrow.svg"

export default function MainBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles['banner__text-block']}>
                <h1 className={styles.banner__title}>Фотобанк природы России</h1>
                <p className={styles.banner__subtitle}>Тропа в волшебный мир</p>
            </div>
            <BannerArrow className={styles.banner__icon}/>
        </div>
    );
}