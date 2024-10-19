import styles from './info.module.sass'
import React, {useState, useEffect} from 'react';
import {useRef} from "react";
import Like from '@/assets/icon/like.svg'
import LikeDef from '@/assets/icon/like-def.svg'
import Button from "@/components/elements/button";
import Map from "@/components/photoDetail/map";

export default function InfoDetailPhoto({image}) {
    const tags = ['алтай', 'горы', 'лес'];
    const [moreText, setMoreText] = useState('Читать');
    const [showButton, setShowButton] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [countLikes, setCountLikes] = useState(image.likes);
    const [isLiked, setIsLiked] = useState(false);
    const textContentRef = useRef(null);

    const toggleText = () => {
        setExpanded(!expanded);
        if (!expanded) {
            setMoreText('Закрыть');
            textContentRef.current.style.maxHeight = `${textContentRef.current.scrollHeight}px`;
            textContentRef.current.style.setProperty('-webkit-line-clamp', 'unset');
        } else {
            setMoreText('Читать');
            calculateAndApplyStyle();
        }
    };

    const calculateAndApplyStyle = () => {
        if (windowWidth > 1364) {
            const lineHeight = parseFloat(window.getComputedStyle(textContentRef.current).lineHeight);
            const textContainerHeight = 70;
            const textContainerLineCount = Math.round(textContainerHeight / lineHeight);
            const actualLines = textContentRef.current.scrollHeight / lineHeight;

            if (actualLines > textContainerLineCount - 1) {
                textContentRef.current.style.maxHeight = `${lineHeight * (textContainerLineCount - 1)}px`;
                setTimeout(() => {
                    textContentRef.current.style.display = "-webkit-box";
                    textContentRef.current.style.webkitBoxOrient = "vertical";
                    textContentRef.current.style.overflow = "hidden";
                    textContentRef.current.style.setProperty('-webkit-line-clamp', 3);
                }, 350);
            } else {
                setShowButton(false);
                textContentRef.current.style.maxHeight = `${textContentRef.current.scrollHeight}px`;
            }
        } else {
            textContentRef.current.style.display = "flex";
            textContentRef.current.style.maxHeight = "fit-content";
            textContentRef.current.style.webkitBoxOrient = "vertical";
            textContentRef.current.style.overflow = "visible";
            textContentRef.current.style.setProperty('-webkit-line-clamp', 'auto');
        }
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setCountLikes(isLiked ? countLikes - 1 : countLikes + 1);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            calculateAndApplyStyle();
        };
        window.addEventListener('resize', handleResize);
        calculateAndApplyStyle();
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <div className={styles.info}>
            <div>


                <a href={`/user/${image.author.id}`} className={styles["info__user-block"]}>
                    <img
                        src={image.author.avatar}
                        alt=""
                        className={styles["info__user-img"]}/>
                    <div className={styles.info__user}>
                        <p className={styles["info__user-name"]}>{image.author.name}</p>
                        <p className={styles["info__user-travelers"]}>{image.author.trips}</p>
                    </div>
                </a>
                <div className={styles.tags}>
                    {/*<ElementsTag v-for="(tag, idx) in tags" :key="idx" :text="tag"/>*/}

                </div>
            </div>
            <div className={styles.info__blocks}>
                <div className={`${styles.info__description} ${styles["info__description-anim"]}`}>
                    <p className={`${styles['info__description-text']} ${styles['info__description-text-anim']}`}
                       ref={textContentRef}>
                        В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит
                        посетить этот
                        лес, вас точно съедят!
                        В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит
                        посетить этот
                        лес, вас точно съедят!
                    </p>
                    {showButton && (
                        <button className={styles["info__description-more"]}
                                onClick={toggleText}>
                            {moreText}
                        </button>
                    )}


                </div>

                <div className={styles.info__coordinates}>
                    <div className={styles["info__coordinates-value-block"]}>
                        <p className={styles["info__coordinates-value"]}>Регион:</p>
                        <p className={styles["info__coordinates-value"]}>Место:</p>
                        <p className={styles["info__coordinates-value"]}>Путешествие:</p>
                    </div>
                    <div className={styles["info__coordinates-value-block"]}>
                        <p className={styles["info__coordinates-value"]}>{image.region}</p>
                        <p className={styles["info__coordinates-value"]}>Медвежий лес</p>
                        <p className={styles["info__coordinates-value"]}>Этно-Алтай</p>
                    </div>
                </div>
            </div>


            <Map reg={image.regionId}/>
            <div className={styles["info__buttons-block"]}>
                <a href={image.img} download>
                    <Button text={'Скачать фото'} download={true}/>
                </a>

                <div className={styles["info__like-block"]}>
                    {isLiked ? (
                        <Like className={styles.info__like} onClick={toggleLike}/>
                    ) : (
                        <LikeDef className={styles.info__like} onClick={toggleLike}/>

                    )}
                    <p className={styles["info__like-count"]}>{countLikes}</p>
                </div>
                {/*<IconLike className="info__like" filled />*/}

            </div>
        </div>
    )
}