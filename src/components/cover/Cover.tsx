import React from 'react'
import ProfilePic from './ProfilePic'
import { Linkedin } from 'lucide-react'
import Button from '../ui/Button'
import Link from 'next/link'
import Image from 'next/image'

const Cover = () => {
  return (
    <div className="flex rounded-lg w-full  bg-[url('/images/cover1.jpeg')] bg-no-repeat bg-cover">
            <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
                <ProfilePic />
                <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5 ">
                        <div className="text-3xl flex flex-col font-bold text-highlight">
                            Yash Vaghani
                            <div className="text-sm font-thin flex justify-between items-center">
                                Software Engineer
                            </div>
                        </div>
                        {/* <div className='flex justify-center'>
                             <Image
                                src="/images/ram1.png"
                                alt="Ram SVG"
                                width={120}
                                height={120}
                            />
                        </div> */}
                        <Link
                            className="hidden md:block"
                            target="_blank"
                            href="https://www.linkedin.com/in/yash-vaghani/"
                        >
                            <Button variant="primary" sizes={'small'}>
                                <Linkedin color="#0277b5" />
                                <span className="hidden md:block">
                                    Follow me on LinkedIn
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cover
