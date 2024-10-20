'use client'
import Button from "@/components/elements/button";
import styles from "./not-found.module.sass";
import notFoundImage from '../assets/img/404.png';
import Image from "next/image";

export default function NotFound() {
    return (
        <div className={styles.err}>
            <div className={styles['err__text-block']}>
                <p className={styles['err__text-green']}>404</p>
                <p className={styles['err__main-text']}>Куда ты, тропа, меня завела?</p>
                <p className={styles['err__subtitle-text']}>Страница станет доступной после форума «Шерегеш»</p>
                <a href="/" className={styles.err__link}>
                    <Button text={'Вернуться на тропу'} white={true}/>
                </a>
            </div>
            <Image src={notFoundImage} className={styles.err__img} alt=""/>
        </div>
    )
}