"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsSun } from 'react-icons/bs';
import { theme } from '@/atoms';
import { useRecoilState } from 'recoil';

const links = [
    {
        text: 'Home',
        location: '/',
    },
    {
        text: 'Posts',
        location: '/posts',
    },
]

const Navbar = () => {
    const [curTheme, setCurTheme] = useRecoilState(theme);

    useEffect(() => {
        if (curTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }, [curTheme]);

    return (
        <div className={`sticky top-6 z-10`}>
            <div className='w-full'>
                <div className='mx-auto max-w-7xl'>
                    <div className='grid grid-cols-3 place-items-center'>
                        {/* <Image src='/avatar.png' alt='avatar' width={50} height={50} className='rounded-full' /> */}
                        <div></div>
                        <ul className='list-none flex gap-6 px-4 py-2 items-center justify-center rounded-full bg-white shadow-md shadow-inset ring-1 ring-zinc-800/25 dark:bg-[#18181B] dark:ring-white/25 dark:shadow-white/10'>
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
                        <div className='bg-white px-3 py-2 rounded-full flex items-center shadow-md shadow-inset ring-1 ring-zinc-800/25 dark:bg-[#18181B] dark:ring-white/25 dark:shadow-white/10'>
                            <button onClick={() => {
                                setCurTheme(curTheme === 'light' ? 'dark' : 'light')
                            }}>
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