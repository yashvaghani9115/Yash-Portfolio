'use client';
import React from 'react'
import { useMenu } from './Provider';
import Menu from './Menu';
import Image from 'next/image';

const Sidebar = () => {
    const { showMenu } = useMenu();
    return (
        <aside
            className={`${
                showMenu ? 'flex' : 'hidden'
            } lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
        >
            {/* Sidebar Container */}

            <div className="toggle flex flex-col lg:m-5 lg:mt-2 w-full">
                <div className="hidden lg:flex gap-2 ms-5 mb-2">
                    <Image
                        alt="Shubham Shingala"
                        src="/images/roundedPic.png"
                        height={60}
                        width={60}
                        className="object-cover border-2 border-w   hite rounded-full shadow-md"
                    />
                </div>
                <Menu />
            </div>
        </aside>
    );
}

export default Sidebar
