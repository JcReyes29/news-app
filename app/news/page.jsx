'use client'
import React, { useEffect, useState } from 'react'
import fetchData from '@/customhooks/fetchData';
import Cards from '@/components/Cards';

export default function News() {
    const [find, setFind] = useState('turismo');
    const [result, setResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const itemsPage = 12;

    function getData() {
        const key = 'fda644f7a546441db48a3bbd3c0992c8'
        const url = `https://newsapi.org/v2/everything?q=${find}&apiKey=${key}`

        setLoading(true);
        fetchData(url)
            .then(data => {
                console.log(data); setResult(data.articles || [])
            })
            .catch(error => console.error('Error fetchind data: ', error))
            .finally(() => setLoading(false));

    }
    useEffect(() => {
        getData()
    }, [])

    // Paginación
    const lastItem = currentPage * itemsPage;
    const firstItem = lastItem - itemsPage;
    const currentItems = result.slice(firstItem, lastItem);
    const allPages = Math.ceil(result.length / itemsPage);
    // Actualizar pagina
    const updatePage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="h-full dark:bg-gray-800">
                <div className="max-w-screen-lg mx-auto p-3 md:p-2 flex flex-col gap-10">
                    <div className="flex flex-col items-center mt-4 md:mt-8 gap-4 md:gap-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center dark:text-white">¿Que quieres ver hoy?</h2>
                        <div className='flex border-2 border-gray-800 dark:bg-white rounded-3xl items-center justify-between py-0 px-2 w-full md:w-[425px] lg:w-[550px]'>
                            <input onChange={(e) => setFind(e.target.value)} type='text' className='outline-none border-none rounded-l-3xl w-11/12 px-2 py-1' placeholder='Buscar en News App'></input>
                            <button onClick={getData} className='py-2 px-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="currentColor" className="size-5 sm:size-6">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center overflow-y-visible'>
                        {loading ? (
                            <div>
                                <svg viewBox="25 25 50 50" className="container">
                                    <circle cx="50" cy="50" r="20" className="loader"></circle>
                                </svg>
                            </div>
                        ) : (
                            currentItems &&
                            currentItems.map((data, index) =>
                                <Cards key={index} images={data} />
                            )
                        )}

                    </div>
                    <nav aria-label="Page navigation example" className='py-4'>
                        <ul className="flex flex-wrap items-center justify-center -space-x-px h-16 md:h-10 text-base">
                            {/* Before */}
                            <li>
                                <button onClick={() => updatePage(currentPage - 1)} disabled={currentPage === 1} className="flex items-center justify-center px-4 h-8 md:h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </button>
                            </li>
                            {/* Page */}
                            {[...Array(allPages)].map((_, i) => (
                                <li key={i}>
                                    <button onClick={() => updatePage(i + 1)} className={`flex items-center justify-center px-4 h-8 md:h-10 ${currentPage === i + 1 ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500'} border hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>{i + 1}</button>
                                </li>
                            ))}
                            {/* Next page */}
                            <li>
                                <button onClick={() => updatePage(currentPage + 1)} disabled={currentPage === allPages} className="flex items-center justify-center px-4 h-8 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}
