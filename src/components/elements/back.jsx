// "use client"
// import { useRouter } from 'next/navigation';
// import BackArrow from "@/assets/icon/back-arrow.svg";
// import React from "react";
// export default function BackButton() {
//     const router = useRouter();
//     const handleBackButtonClick = () => {
//         router.back();
//     };
//     return (
//         <button
//             onClick={handleBackButtonClick}
//             className='stock__back-button'
//             type="button"
//             aria-label="Назад"
//         >
//             <BackArrow className='stock__back' />
//         </button>
//     );
// };
// app/components/BackButton.js
import BackArrow from "@/assets/icon/back-arrow.svg";

export default function BackButton() {
    return (
        <button
            // onClick={() => window.history.back()} // Используем window.history для навигации
            className='stock__back-button'
            type="button"
            aria-label="Назад"
        >
            <BackArrow className='stock__back' />
        </button>
    );
}
