import styles from "./region.module.sass";
import Star from '@/assets/icon/star.svg'
import Bus from '@/assets/icon/bus.svg'
import Like from '@/assets/icon/like.svg'

export default function CardsRegion({card}) {
    return (
        <div>
                <a className={styles['card-reg']}>
                    <img src={card.img} alt={card.text} className={styles['card-reg__img']}/>
                    <p className={styles['card-reg__title']}>{card.text}</p>
                    <div className={styles.test}>
                        {card.tag.text}
                        {card.tag.type === 'pop' && <Star className={styles['card-reg__icon']}/>}
                        {card.tag.type === 'like' && <Like className={styles['card-reg__icon']}/>}
                        {card.tag.type === 'bus' && <Bus className={styles['card-reg__icon']}/>}
                    </div>
                </a>
        </div>
    );
}
