import styles from "./header.module.sass";


export default function CardsRegion() {
    return (
        <a href="/user/1" className={styles['header-lk']}>
            <p className={styles['header-lk__name']}>Мария</p>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Аватарка пользователя."
            className={styles['header-lk__img']} />
        </a>
    );
}
