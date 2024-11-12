// "use client";
// import styles from "./header.module.sass";
// import Logo from '../../assets/icon/logo.svg'
// import HeaderLk from '@/components/header/Lk'
// import {usePathname} from 'next/navigation';
//
// export default function Header() {
//     const router = usePathname();
//     return (
//         <header
//             className={`${styles.header} ${router === '/' ? styles['main-page'] : ''}`}>
//             <div className={styles.icons}>
//                 <a href="/">
//                     <Logo className={styles.header__logo}/>
//                 </a>
//             </div>
//             <nav className={styles.header__nav}>
//                 <a href="/photobank"
//                    className={`${styles['header__nav-item']} ${router.includes('/photo') ? styles['header__nav-item_active'] : ''} `}>Фотобанк</a>
//                 <a href="/challenges"
//                    className={`${styles['header__nav-item']} ${router.includes('/challenges') ? styles['header__nav-item_active'] : ''} `}>Челленджи</a>
//                 <HeaderLk/>
//             </nav>
//         </header>
//     );
// }

// app/components/Header.js
import styles from "./header.module.sass";
import Logo from '../../assets/icon/logo.svg';
import HeaderLk from '@/components/header/Lk';

export default function Header({ params }) {
    const currentPath = `/${params}`;
    return (
        <header className={`${styles.header} ${currentPath === '/' ? styles['main-page'] : ''}`}>
            <div className={styles.icons}>
                <a href="/">
                    <Logo className={styles.header__logo} />
                </a>
            </div>
            <nav className={styles.header__nav}>
                <a
                    href="/photobank"
                    className={`${styles['header__nav-item']} ${currentPath.includes('/photo') ? styles['header__nav-item_active'] : ''}`}>
                    Фотобанк
                </a>
                <a
                    href="/challenges"
                    className={`${styles['header__nav-item']} ${currentPath.includes('/challenges') ? styles['header__nav-item_active'] : ''}`}>
                    Челленджи
                </a>
                <HeaderLk />
            </nav>
        </header>
    );
}

export async function getServerSideProps(context) {
    const { slug } = context.params;
    return {
        props: {
            currentPath: `/${slug}`, // Передаем текущий путь
        },
    };
}
