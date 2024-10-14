import {RegionDataCard} from "@/const";
import styles from "./page.module.sass";
import CardsRegion from "@/components/cards/region";
import MainBanner from "@/components/main/banner";
import Search from "@/components/elements/search";
import Button from "@/components/elements/button";

export default function Home() {
    return (
        <div>
            <MainBanner/>
            <div className={styles.main__block}>
            <Search/>
            <div className={styles.main__cards}>
                {RegionDataCard.map((card, key) => (
                    <CardsRegion
                        card={card}
                        key={key}/>
                ))}
            </div>
            <Button
                text={'Ещё'}
            />
            </div>
        </div>
    );
}
