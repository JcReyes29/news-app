'use client'
import React from 'react'
import { useCard } from '../context/CardContext';

export default function ViewCard() {
    const { cardData } = useCard();

    if (!cardData) {
        return <p>No se selecciono ninguna tarjeta</p>;
    }

    const { urlToImage, title, description, author, content, publishedAt, url, source } = cardData;
    return (
        <>
            <section className="h-full dark:bg-gray-800">
                <div className="max-w-screen-lg mx-auto p-3 md:p-2 flex flex-col gap-10">
                    <div className='grid sm:flex gap-5 w-full justify-center h-full my-8 px-8'>
                        <div className='flex flex-col justify-around sm:w-3/6 gap-2'>
                            <h3 className='dark:text-white'>{publishedAt}</h3>
                            <h1 className='text-center text-2xl font-bold dark:text-white'>{title}</h1>
                            <p className=' dark:text-white'>{description}</p>
                            <h2 className=' dark:text-red-600 font-medium text-lg'>Autor: {author}</h2>
                            <h4 className=' dark:text-white font-semibold dark:font-medium text-lg'>Fuente: {source.name}</h4>

                        </div>
                        <div className='flex justify-center sm:w-3/6 h-80 rounded-xl'>
                            <img className='rounded-xl' src={urlToImage} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <div className='className="h-full dark:bg-gray-700 bg-slate-300'>
                <div className='max-w-screen-lg mx-auto p-3 md:p-2 flex flex-col gap-10'>
                    <div className='flex gap-5 w-full justify-center h-full my-8 px-8'>
                        <div className='flex flex-col gap-5 sm:w-full sm:items-center'>
                            <p className=' dark:text-white'>{content}</p>
                            <a href={url} className='rounded-lg text-white bg-blue-600 active:bg-blue-700 hover:bg-blue-500 text-center py-1 px-3 w-32'>Página</a>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
