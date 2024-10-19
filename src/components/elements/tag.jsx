import styles from "./tag.module.sass";

export default function Tag({data, main}) {

    return (
        <a href={`/tags/${data.slug}`} className={`${styles.tag} ${main && styles.tag_main}`}>
            <p className={styles.tag__item}>
                #{data.title}
            </p>
        </a>
    );
}