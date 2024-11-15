import React from 'react'

export default function Cards({ images: { urlToImage, title, description, source } }) {
    return (
        <>
            <div className="max-w-56 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={urlToImage} alt='' />
                </a>
                <div className="p-3">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <h6 className='text-center text-black dark:text-white font-semibold'>{source.name}</h6>
                </div>
            </div>
        </>
    )
}
