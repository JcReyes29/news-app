import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-[#ff2323]'>
                <div className="max-w-screen-lg flex flex-col gap-4 items-center justify-center mx-auto p-3 md:p-6">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className='border-2 rounded-lg border-white dark:border-gray-950'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8 md:size-12 dark:stroke-gray-950">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-white dark:text-gray-950">NEWS APP</span>
                    </a>
                    <div className='md:flex md:gap-5'>
                        <hr className='w-screen md:hidden' />
                        <h3 className='text-center hover:border-b text-white dark:text-black hover:border-white dark:hover:border-black cursor-pointer'>Terminos de Uso</h3>
                        <hr className='w-screen md:hidden' />
                        <h3 className='text-center hover:border-b text-white dark:text-black hover:border-white dark:hover:border-black cursor-pointer'>Políticas de Privacidad</h3>
                        <hr className='w-screen md:hidden' />
                        <h3 className='text-center hover:border-b text-white dark:text-black hover:border-white dark:hover:border-black cursor-pointer'>Cookies</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}
