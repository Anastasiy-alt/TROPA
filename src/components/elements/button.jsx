import styles from "./button.module.sass";
import Plus from '@/assets/icon/plus.svg'
import PlusWhite from '@/assets/icon/plus-white.svg'

export default function Button({text, download, white, disable, plus, onDownload}) {
    return (
            <button className={`${styles.button} ${download ? styles.button_download : ''} 
                  ${white ? styles.button_white : ''} ${disable ? styles.button_dis : ''}`}
                    disabled={disable}
                    onClick={onDownload}
            >
                <p className={styles.button__text}>{text}</p>
                {plus && (
                    <div className={`${styles.button__icon} ${styles.button__icon_block}`}>
                        <Plus className={`${styles.button__icon} ${styles.button__icon_black}`}/>
                        <PlusWhite className={`${styles.button__icon} ${styles.button__icon_white}`}/>
                    </div>
                )}
            </button>

    )
}