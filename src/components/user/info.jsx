import styles from './info.module.sass'


export default function UserInfo({user}) {

    return (
        <div className={styles.userinfo}>
            <img
                src={user.avatar}
                alt={user.name}
                className={styles.userinfo__img}/>
            <div className={styles.userinfo__block}>
                <div className={styles.userinfo__text}>
                    <p className={styles.userinfo__name}>{user.name}</p>
                    <p className={styles.userinfo__value}>{user.old}</p>
                </div>
                {/*<div className={styles.userinfo__text}>*/}
                {/*    <p className={styles.userinfo__type}>Образование</p>*/}
                {/*    <p className={styles.userinfo__value}>Южно-Уральский Государственный Университет</p>*/}
                {/*</div>*/}
                <div className={styles.userinfo__text}>
                    <p className={styles.userinfo__type}>Город</p>
                    <p className={styles.userinfo__value}>{user.city}</p>
                </div>
                <p className={styles.userinfo__travels}>{user.trips}</p>
            </div>
        </div>
    )
}