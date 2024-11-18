import { useCard } from '@/app/context/CardContext';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function TopCards({ data: { urlToImage, title, description, source, author, content, publishedAt, url } }) {
    const { setCardData } = useCard();
    const router = useRouter();

    const handleClick = () => {
        setCardData({
            urlToImage, title, description, source, author, content, publishedAt, url,
        });
        router.push('/card');
    }
    return (
        <>
            <div onClick={handleClick} className="flex justify-center cursor-pointer gap-2">
                <div className="w-full md:h-96 h-80 sm:px-4">
                    <div style={{ backgroundImage: `url(${urlToImage ? urlToImage : 'images/second.jpg'})` }} className="fondoT rounded-2xl active:bg-gray-700 bg-cover bg-center flex place-content-center h-full items-center">
                        <div className="text flex flex-col px-1 sm:px-4 sm:gap-3 mb-1 mt-auto">
                            <a href="#">
                                <h5 className="mb-1 text-xl text-gray-900 sm:text-2xl font-bold tracking-tight">{title}</h5>
                            </a>
                            <p className="font-normal sm:text-lg">{description}</p>
                            <h6 className='text-center font-semibold'>{source.name}</h6>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
