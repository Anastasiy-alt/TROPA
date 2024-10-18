import styles from './awards.module.sass'

export default function UserAwards({awards}) {
    return (
        <div className={styles.awards}>
            <div className={styles['awards__title-block']}>
                <p className={styles.awards__title}>Достижения</p>
                <div className={styles.awards__count}>{awards.length}</div>
            </div>
            <div className={styles.awards__block}>
                {awards.map((item, key) => (
                    <div className={styles.awards__item} key={key}>
                        <div className={styles.awards__tooltip}>
                            {item.text}
                        </div>
                        <span className={`${styles['awards__item-count']} ${styles[`${item.icon}`]}`}>{key + 1}</span>
                        <div className={`${styles['awards__item-icon']} ${styles[`${item.icon}`]}`}></div>
                        {/*<IconAward className={styles.awards__item-icon" :className={styles.item" filled/>*/}
                    </div>
                ))}

            </div>
        </div>
    )
}