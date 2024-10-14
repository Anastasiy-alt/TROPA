import styles from "./header.module.sass";
import {UserData} from "@/const";

export default function CardsRegion() {
    return (
        <a href={`/user/${UserData.id}`} className={styles['header-lk']}>
            <p className={styles['header-lk__name']}>{UserData.name}</p>
            <img src={UserData.avatar}
                 alt="Аватарка пользователя."
            className={styles['header-lk__img']} />
        </a>
    );
}
