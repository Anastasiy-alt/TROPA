import styles from "./tag.module.sass";

export default function Tag({title, main}) {

    return (
        <a href="/photobank" className={`${styles.tag} ${main && styles.tag_main}`}>
            <div className={styles.tag__item}>
                #{title}
            </div>
        </a>
    );
}