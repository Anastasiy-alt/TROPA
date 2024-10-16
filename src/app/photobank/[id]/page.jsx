"use client"
import {RegionDataCard} from "@/const";
import React, {useEffect, useState} from "react";
import {useParams} from 'next/navigation';

export default function Photo() {
    const findRegionBySlug = (data) => {
        console.log(data)
        return data.RegionDataCard.find(region => region.slug === data.slug);
    };

    const router = useParams();
    const slug = router.id;
    const [foundRegion, setFoundRegion] = useState(null);

    useEffect(() => {
        if (slug) {
            const region = findRegionBySlug({RegionDataCard, slug});
            setFoundRegion(region);
            console.log(region, slug);
        }
    }, [slug]);

    return (
        <div>
            PHOTOBANK ID
            {foundRegion ? (
                <div>
                    <h2>{foundRegion.text}</h2>
                    <img src={foundRegion.img} alt={foundRegion.text}/>
                    <p>Тег: {foundRegion.tag.text}</p>
                </div>
            ) : (
                <p>Регион не найден</p>
            )}
            PHOTOBANK ID </div>
    );
}
