"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsSun } from 'react-icons/bs';

const links = [
    {
        text: 'Home',
        location: '/',
    },
    {
        text: 'Blog',
        location: '/blog',
    },
]

const Navbar = () => {
    const [height, setHeight] = useState(64);
    useEffect(() => {
        const handleScroll = () => {
            setHeight(() => {
                return Math.max(window.scrollY - 64, 64);
            })
            const header = document.querySelector('header');
            header?.style.setProperty('height', `${height}px`);
            header?.style.setProperty('margin-bottom', `${64 - height}px`);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <div className={`sticky top-0 z-10`}>
            <div className='w-full'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid grid-cols-3 place-items-center'>
                        <Image src='/avatar.png' alt='avatar' width={50} height={50} className='rounded-full' />
                        <ul className='list-none flex gap-6 px-4 py-2 items-center justify-center rounded-full bg-white shadow-md shadow-inset ring-1 ring-zinc-800/25'>
                            {
                                links.map((el, index) => (
                                    <Link href={el.location} key={index}>
                                        <li className='text-center text-sm font-medium'>
                                            {el.text}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                        <div className='bg-white px-3 py-2 rounded-full flex items-center shadow-md shadow-inset ring-1 ring-zinc-800/25'>
                            <button>
                                <BsSun size='20' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar;