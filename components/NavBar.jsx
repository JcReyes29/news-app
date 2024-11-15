'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(false);
    const [openIdiom, setOpenIdiom] = useState(false);
    const [openFont, setOpenFont] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleToggle = () => setDarkMode(!darkMode);

    return (
        <>
            <nav className="bg-[#ff2323]">
                <div className=" max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-3 md:p-2">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className='border-2 border-white dark:border-gray-950 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
                                className="size-8 md:size-12 dark:stroke-gray-950">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-white dark:text-gray-950">NEWS APP</span>
                    </a>
                    <div className='flex items-center gap-2'>
                        <h2 className='hidden sm:block text-white dark:text-black'>{!darkMode ? 'Modo Claro' : 'Modo Oscuro'}</h2>
                        <label className="switch">
                            <input type="checkbox" onChange={handleToggle} />
                            <span className="slider"></span>
                        </label>

                    </div>
                </div>
                <div className='bg-white shadow-md dark:bg-gray-700'>
                    <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-3 md:p-2">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse text-black">
                            <button className=' focus:bg-red-500 focus:text-white
                                 active:bg-red-600 px-2 py-1 rounded-md hover:bg-[#ff2323ea] hover:text-white dark:text-white' ><Link href={'/'}>
                                    Noticias
                                </Link></button>
                            <button className=' focus:bg-red-500 focus:text-white
                                 active:bg-red-600 px-2 py-1 rounded-md hover:bg-[#ff2323ea] hover:text-white dark:text-white'><Link href={'/news'}>
                                    Busqueda
                                </Link></button>
                        </div>


                        <div className='flex gap-2'>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={() => setOpenIdiom(!openIdiom)} type="button" className="hover:bg-[#ff2323ea]  focus:bg-red-500 focus:text-white hover:text-white inline-flex w-16 sm:w-32 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Idioma
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                {openIdiom && (
                                    <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                                            <form method="POST" action="#" role="none">
                                                <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                                            </form>
                                        </div>
                                    </div>

                                )}

                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={() => setOpenFont(!openFont)} type="button" className="hover:bg-[#ff2323ea]  focus:bg-red-500 focus:text-white hover:text-white inline-flex w-16 sm:w-32 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Fuente
                                        <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                {openFont && (
                                    <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</a>
                                            <form method="POST" action="#" role="none">
                                                <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                                            </form>
                                        </div>
                                    </div>

                                )}

                            </div>
                        </div>


                    </div>
                </div>
            </nav>
        </>
    )
}
