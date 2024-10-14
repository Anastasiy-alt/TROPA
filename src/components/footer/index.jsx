import LogoWhite from '@/assets/icon/logo-white.svg'
import styles from "./footer.module.sass";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="/">
                <LogoWhite className={styles.footer__logo}/>
            </a>
            <nav className={styles.footer__nav}>
                <a href="/photobank" className={styles['footer__nav-link']}>Фотобанк</a>
                <a href="/challenges" className={styles['footer__nav-link']}>Челленджи</a>
                <a href="/user" className={styles['footer__nav-link']}>Профиль</a>
            </nav>
            <div className={styles.footer__contacts}>
                <a href="tel:79080764324" className={styles['footer__contacts-link']}>+7(908)-07-643-24</a>
                <a href="mailto:tropa@trip.ru" className={styles['footer__contacts-link']}>tropa@trip.ru</a>
            </div>
        </footer>
    )
}