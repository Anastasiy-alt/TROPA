import React from 'react';
import TagsClient from './TagsClient';
import {HashtagsData} from "@/const";

export async function generateStaticParams() {
    const ids = HashtagsData.map(hashtag => hashtag.slug);
    return ids.map(id => ({id}));
}

const TagsID = (props) => {
    return <TagsClient />;
}

export default TagsID;