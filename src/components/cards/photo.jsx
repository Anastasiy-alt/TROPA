import styles from "./photo.module.sass";
import Eye from '@/assets/icon/eye.svg'
import Tag from "@/components/elements/tag"


export default function Photo({data}) {
    return (
        <a className={styles.photo} href={`/photo/${data.id}`}>
            <img src={data.img} alt="" className={styles.photo__img}/>
            <div className={styles['photo__tag-block']}>
                {data.tags.map((data, key) => (
                    <Tag title={data.title} key={key} />
                ))}
            </div>
            <div className={styles.photo__visible}>
                {data.views}
                <Eye className={styles['photo__visible-icon']}/>
            </div>
        </a>
    )
}