import IconSearch from '@/assets/icon/search.svg';
import styles from "./search.module.sass";

export default function Search() {
    const search = ''
    return (
        <form method="get" className={styles.search}>
            <input
                   className={styles.search__input}
                   placeholder="Поиск по регионам" type="text"/>
            <IconSearch className={`${styles.search__icon} ${search?.length > 0 ? styles.search__icon_active : ''}`}
            />
        </form>
    );
}