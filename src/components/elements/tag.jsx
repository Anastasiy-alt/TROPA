import styles from "./tag.module.sass";

export default function Tag({title}) {

    return (
        <a href="/photobank" className={styles.tag}>
            <div className={styles.tag__item}>
                #{title}
            </div>
        </a>
    );
}