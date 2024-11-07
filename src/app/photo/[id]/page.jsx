import React from 'react';
import PhotoClient from './PhotoClient';

export async function generateStaticParams() {
    const ids = Array.from({ length: 62 }, (_, index) => (index + 1).toString());
    return ids.map(id => ({id}));
}

const PhotoID = (props) => {
    return <PhotoClient />;
}

export default PhotoID;
