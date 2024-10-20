import {useRouter} from 'next/navigation';
import BackArrow from "@/assets/icon/back-arrow.svg";
import React from "react";

export default function BackButton() {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.back();
    };

    return (
        <button onClick={handleBackButtonClick} className='stock__back-button'>
            <BackArrow className='stock__back'/>
        </button>
    );
};
