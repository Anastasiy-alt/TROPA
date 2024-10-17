import styles from './map.module.sass';
import Map from '@/assets/icon/map.svg'
export default function MapDetailPhoto() {

    return(
        <div>
            <div className={styles.info__map}>
                <Map className={styles["info__map-svg"]} />
            </div>
        </div>
    )
}