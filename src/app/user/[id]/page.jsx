import React from 'react';
import UserClient from './UserClient';
import {HashtagsData} from "@/const";

export async function generateStaticParams() {
    const ids = ['1', '2', '3']
    return ids.map(id => ({id}));
}

const UserIdPage = () => {
    return <UserClient />;
}

export default UserIdPage;