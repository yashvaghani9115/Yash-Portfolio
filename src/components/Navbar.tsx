'use client';
import { Download, Menu, User } from 'lucide-react'
import React, { FC } from 'react'
import { useMenu } from './Provider';
import Link from 'next/link';
import Button from './ui/Button';

interface NavbarProps {}

const Navbar : FC<NavbarProps> = () => {
    const { showMenu, showMenuVisibility } = useMenu();
 
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/resume.pdf'; // Adjust the path based on your file location
        link.download = 'Shubham_Shingala_Resume.pdf';
        link.click();
    }
    
    return (
        <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-end">
        {/* <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            <span className="text-white ml-2 text-lg font-semibold">Shubham Shingala</span>
        </div> */}

        {/* Right Side: Button */}
        <div className='flex items-center gap-5'>
            <Button variant='primary_hover' onClick={() => handleDownload()}>
                Download CV <Download size={18} />
            </Button>
            <Button disabled >
                Contact Me <User size={18} />
            </Button>
            <button 
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
        </div>
        </nav>
    )
}

export default Navbar
