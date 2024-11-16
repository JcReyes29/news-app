import { useCard } from '@/app/context/CardContext'
import { useRouter } from 'next/navigation';

export default function Cards({ images: { urlToImage, title, description, source, author, content, publishedAt, url } }) {

    const { setCardData } = useCard();
    const router = useRouter();

    const handleClick = () => {
        setCardData({
            urlToImage, title, description, source, author, content, publishedAt, url,
        });
        router.push('/card');
    };
    return (
        <>
            <div className="flex flex-col max-w-56 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={urlToImage ? urlToImage : 'https://picsum.photos/seed/picsum/200/300'} alt='' />
                </a>
                <div className="p-3 mb-auto">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <h6 className='text-center text-black dark:text-white font-semibold'>{source.name}</h6>
                </div>
                <button onClick={handleClick} className='border rounded-md mx-6 my-2 py-1 text-center bg-[#ff2323ea] hover:bg-[#ff2323d3] dark:active:bg-red-500 dark:hover:bg-[#ff2323be] active:bg-red-600 text-white dark:border-none font-medium'>
                    Leer más
                </button>
            </div>
        </>
    )
}
