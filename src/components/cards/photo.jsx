import styles from "./photo.module.sass";
import Eye from '@/assets/icon/eye.svg'
import Tag from "@/components/elements/tag"


export default function Photo() {
    return (
        <a className={styles.photo} href={`/photo/${id}`}>
            <img src={img} alt="" className={styles.photo__img}/>
            <div className={styles['photo__tag-block']}>
                {/*<Tag v-for="(tag, idx) in tags" :key="idx" :text="tag"/>*/}
            </div>
            <div className={styles.photo__visible}>
                {/*{{vision}}*/}
                <Eye className={styles['photo__visible-icon']}/>
            </div>
        </a>
    )
}