import styles from './map.module.sass';
import Map from '@/assets/icon/map.svg'
import {useRef, useEffect} from "react";

export default function MapDetailPhoto({reg}) {
    const map = useRef(null)
    useEffect(() => {
        if (map.current) {
            const element = map.current.querySelector(`.map_svg__${reg}`);
            if (element) {
                element.style.fill = 'rgba(2, 191, 137)';
            }
        }
    }, [reg]);
    return (
        <div>
            <div className={styles.info__map} ref={map}>
                <Map className={styles["info__map-svg"]}/>
            </div>
        </div>
    )
}