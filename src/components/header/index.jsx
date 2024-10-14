import styles from "./header.module.sass";
import Logo from '../../assets/icon/logo.svg'
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <a className='button logo-btn'>
                    <img src='@/assets/icon/logo.svg' alt='Логотип.' className='logo rotate' />
                </a>
            </div>
            {/*<div className={styles.header__nav}>*/}
            {/*    akjhjkhrg*/}
            {/*</div>*/}
        </div>
    );
}
