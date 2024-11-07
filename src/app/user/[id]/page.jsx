import styles from './page.module.sass';
import UserInfo from '@/components/user/info';
import UserGallery from '@/components/user/gallery';
import UserAwards from '@/components/user/awards';
import BackButton from '@/components/elements/back';
import { UserData } from '@/const';

export default async function UserIdPage({ params }) {
    const { id } = params; // Получите id из параметров страницы
    const foundUser = UserData.find(user => user.id === Number(id));

    return (
        <div className={styles.user}>
            {foundUser && (
                <div>
                    <BackButton />
                    <div className={styles.user__info}>
                        <UserInfo user={foundUser} />
                        <UserAwards awards={foundUser.awards} />
                    </div>
                    <UserGallery photos={foundUser.photos} />
                </div>
            )}
        </div>
    );
}

// Функция для генерации статических параметров
export async function generateStaticParams() {
    const paths = UserData.map(user => ({
        id: user.id.toString()
    }));

    return paths;
}