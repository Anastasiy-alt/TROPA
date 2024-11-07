import {PhotoCards, RegionDataCard} from "@/const";
import React from 'react';
import PhotobankClient from './PhotobankClient';

export async function generateStaticParams() {
    const ids = ['chelyabinskaya-oblast',
        'tomskaya-oblast',
        'hmao-yugra',
        'respublika-tatarstan',
        'kamchatskiy-kraj',
        'krasnodarskiy-kraj',
        'respublika-altay',
        'kemerovskaya-oblast',
        'sankt-peterburg',
        'primorskiy-kraj',
        'irkutskaya-oblast',
    ];
    return ids.map(id => ({id}));
}

const PhotobankID = (props) => {
    return <PhotobankClient photoCards={PhotoCards} regionDataCard={RegionDataCard} {...props} />;
}

export default PhotobankID;
