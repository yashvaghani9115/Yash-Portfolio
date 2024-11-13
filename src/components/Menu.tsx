'use client';
import { X, Home, Linkedin, Github, Instagram, Youtube, Twitter } from 'lucide-react';
import React from 'react'
import { useMenu } from './Provider';
import List from './ui/List';
import Image from 'next/image';

const Menu = () => {
    const { showMenuVisibility } = useMenu();

    return (
      <div
        className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
        onClick={() => showMenuVisibility(false)}
      >
        <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
          <X className={`text-primary`} />
        </div>
        <List link="/" effect="slideUp">
            <Home color="#2bd576"/> Home
        </List>
        <List
            target="_blank"
            link="https://www.linkedin.com/in/yash-vaghani/"
            effect="slideUp"
        >
            <Linkedin color="#0277b5" /> Linkedin
        </List>
        <List target="_blank" link="https://github.com/yashvaghani9115" effect="slideUp">
            <Github color="#2a9d8f" /> Github
        </List>

        <List
            target="_blank"
            link="https://www.instagram.com/yash__vaghani/"
            effect="slideUp"
        >
            <Instagram color="#b5179e" /> Instagram
        </List>

        {/* <div className="lg:flex  mt-10 mb-0 mx-8 justify-center">
            <Image
                alt='Jay Shree Ram'
                src="/images/ram.jpg"
                height={200}
                width={200}
                className="object-cover border-2 border-w hite shadow-md"
            />
        </div> */}
    
      </div>
    );
}

export default Menu
