'use client';
import Photo from '@/components/cards/photo'
import {PhotoCards} from '@/const'
export default function Photobank() {


    return (
        <div>

                  {PhotoCards.map((photo, key) => (
                    <Photo key={key} data={photo} />
                ))

            }
        </div>
    );
}
