"use client";
import styles from "./header.module.sass";
import Logo from '../../assets/icon/logo.svg'
import {useRouter} from 'next/navigation';
import HeaderLk from '@/components/header/Lk'

export default function Header() {
    const router = useRouter();
    const {pathname} = router;
    return (
        <header
            className={`${styles.header} ${pathname === '/' ? styles['main-page'] : ''}`}>
            <div className={styles.icons}>
                <a href="/">
                    <Logo className={styles.header__logo}/>
                </a>
            </div>
            <nav className={styles.header__nav}>
                <a href="/photobank"
                   className={`${styles['header__nav-item']} ${window?.location.pathname.includes('/photo') ? styles['header__nav-item_active'] : ''} `}>Фотобанк</a>
                <a href="/challenges"
                   className={`${styles['header__nav-item']} ${window?.location.pathname.includes('/challenges') ? styles['header__nav-item_active'] : ''} `}>Челленджи</a>
                <HeaderLk/>
            </nav>
        </header>
    );
}
