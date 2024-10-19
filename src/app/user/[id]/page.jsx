"use client"
import styles from './page.module.sass'
import {useParams} from 'next/navigation';
import UserInfo from '@/components/user/info'
import React, {useEffect, useState} from "react";
import {UserData} from "@/const";
import UserGallery from "@/components/user/gallery";
import UserAwards from "@/components/user/awards";
import BackButton from "@/components/elements/back";

export default function UserIdPage() {
    const router = useParams();
    const id = router.id;
    const [foundUser, setFoundUser] = useState(null);
    const findUser = (data) => {
        return data.UserData.find(region => region.id === data.id);
    };

    useEffect(() => {
        if (id) {
            const user = findUser({UserData, id});
            setFoundUser(user);
            console.log(user)
        }
    }, [id]);

    return (
        <div className={styles.user}>
            {foundUser && (
                <div>
                    <BackButton />
                    <div className={styles.user__info}>
                        <UserInfo user={foundUser}/>
                        <UserAwards awards={foundUser.awards}/>
                    </div>
                    <UserGallery photos={foundUser.photos}/>
                </div>
            )
            }
        </div>

    )
}