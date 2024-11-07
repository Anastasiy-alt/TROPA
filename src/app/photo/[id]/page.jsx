import React from 'react';
import PhotoClient from './PhotoClient';

export async function generateStaticParams() {
    const ids = Array.from({ length: 62 }, (_, index) => (index + 1).toString());
    return ids.map(id => ({id}));
}

const PhotoID = ({ params }) => {
    const { id } = params;  // Деструктурируем id из params
    return <PhotoClient id={id} />;  // Передаем id в PhotoClient
}

export default PhotoID;
