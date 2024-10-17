import styles from "./header.module.sass";
import {UserData} from "@/const";

export default function CardsRegion() {
    return (
        <a href={`/user/${UserData[0].id}`} className={styles['header-lk']}>
            <p className={styles['header-lk__name']}>{UserData[0].name}</p>
            <img src={UserData[0].avatar}
                 alt="Аватарка пользователя."
            className={styles['header-lk__img']} />
        </a>
    );
}
