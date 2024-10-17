import styles from './info.module.sass'
export default function InfoDetailPhoto() {
    const tags = ['алтай', 'горы', 'лес']
    const moreText = ref('Читать')

    const container = ref(null);
    const textContent = ref(null);
    const showMoreBtn = ref(null);
    const showButton = ref(true);
    const expanded = ref(false);
    const windowWidth = ref()

    const toggleText = () => {
        expanded.value = !expanded.value;
        if (expanded.value) {
            moreText.value = 'Закрыть'
            textContent.value.style.maxHeight = `${textContent.value.scrollHeight}px`;
            textContent.value.style.setProperty('-webkit-line-clamp', 'unset');
        } else {
            moreText.value = 'Читать'
            calculateAndApplyStyle();
        }
    };

    const defaultStyles = (count) => {
        textContent.value.style.display = "-webkit-box";
        textContent.value.style.webkitBoxOrient = "vertical";
        textContent.value.style.overflow = "hidden";
        textContent.value.style.setProperty('-webkit-line-clamp', count);
    }

    const calculateAndApplyStyle = () => {
        windowWidth.value = window.innerWidth
        if (window.innerWidth > 1364) {
            const lineHeight = parseFloat(window.getComputedStyle(textContent.value).lineHeight);
            const textContainerHeight = 70
            // Math.round(300 - (title.value.scrollHeight + 95))
            const textContainerLineCount = Math.round(textContainerHeight / lineHeight)
            const actualLines = textContent.value.scrollHeight / lineHeight;
            if (actualLines > textContainerLineCount - 1 && actualLines !== textContainerLineCount) {
                textContent.value.style.maxHeight = `${lineHeight * (textContainerLineCount - 1)}px`;
                setTimeout(() => defaultStyles(3), 350);
            }
            if (actualLines <= textContainerLineCount) {
                showButton.value = false;
                textContent.value.style.maxHeight = `${textContent.value.scrollHeight}px`;
            } else {
                showButton.value = true;
                if (expanded.value) {
                    expanded.value = false
                    moreText.value = 'Read'
                }
            }
        } else {
            textContent.value.style.display = "flex";
            textContent.value.style.maxHeight = "fit-content";
            textContent.value.style.webkitBoxOrient = "vertical";
            textContent.value.style.overflow = "visible";
            textContent.value.style.setProperty('-webkit-line-clamp', 'auto');
        }
    };
// const isLiked = card.likes.some(i => i._id === currentUser._id);
// function handleCardLike(card) {
//   const isLiked = card.likes.some(i => i._id === currentUser._id);
//   api.changeLikeCardStatus(card._id, !isLiked)
//       .then((newCard) => {
//         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
//       })
//       .catch((error) => {
//         console.log(`Ошибка: ${error}`);
//       });
// }
// const handleLikeClick = () => {
//   onCardLike(card);
// };
    const countLikes = ref(21)
    const isLiked = ref(false)
    const toogleLike = () => {
        isLiked.value = !isLiked.value
        if (isLiked.value) {
            countLikes.value++
        } else {
            countLikes.value--
        }
    }

    onMounted(() => {
        windowWidth.value = window.innerWidth
        calculateAndApplyStyle();
    })
    return (
        <div className={styles.info}>
            <div>


                <a href="/user/1" className={styles["info__user-block"]}>
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={styles["info__user-img"]} />
                        <div className={styles.info__user}>
                            <p className={styles["info__user-name"]}>Марина Баринова</p>
                            <p className={styles["info__user-travelers"]}>5 поездок</p>
                        </div>
                </a>
                <div className={styles.tags}>
                    {/*<ElementsTag v-for="(tag, idx) in tags" :key="idx" :text="tag"/>*/}

                </div>
            </div>
            <div className={styles.info__blocks}>
                <div className={`${styles.info__description} ${styles["info__description-anim"]}`} ref="container">
                    <p className={`${styles['info__description-text']} ${styles['info__description-text-anim']}`} ref="textContent">
                        В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит
                        посетить этот
                        лес, вас точно съедят!
                        В этом медвежем лесу водятся красивые медведи: и белые, и черные, и черно-белые. Вобщем стоит
                        посетить этот
                        лес, вас точно съедят!
                    </p>
                    {showButton && (
                        <button ref="showMoreBtn" className={styles["info__description-more"]}
                                onClick="toggleText">
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
                    <p className={styles["info__coordinates-value"]}>Республика Алтай</p>
                    <p className={styles["info__coordinates-value"]}>Медвежий лес</p>
                    <p className={styles["info__coordinates-value"]}>Этно-Алтай</p>
                </div>
            </div>
        </div>


    {/*<PhotoDetailMap/>*/}


    <div className={styles["info__buttons-block"]}>
        {/*<ElementsButton :text="'Скачать фото'" :download="true"/>*/}
        <div className={styles["info__like-block"]}>
            {/*<IconLike v-if="isLiked" className="info__like" filled onClick="toogleLike"/>*/}
            {/*<IconLikeDef v-if="!isLiked" className="info__like" filled onClick="toogleLike"/>*/}
            <p className={styles["info__like-count"]}>{countLikes}</p>
        </div>
        <!--      <IconLike className="info__like" filled />-->

    </div>
</div>
)
}