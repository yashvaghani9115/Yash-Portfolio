import { Mail, Phone, LocateIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const mail = 'yashvaghani9115@gmail.com';
  return (
    <div className='bg-cardPrimary flex justify-between text-primary mx-5 mt-0 mb-5 p-3'>
        <div className='mx-5 ms-10'>
            <div className='flex mx-auto my-2 text-primary font-medium text-lg tracking-wider'>
                Contact Information
            </div>
            <Link href={`mailto:${mail}`} target='_blank' className='flex mx-auto my-2 '>
                <Mail color='red'/> <div className='flex text-s text-primary ms-2'>{mail}</div>
            </Link>
            <Link href="/" target='_blank' className='flex mx-auto my-2 '>
                <LocateIcon color='blue'/> <div className='flex text-s text-primary ms-2'>India</div>
            </Link>
        </div>

        <div className='mx-5 me-10'>
            <div className='flex mx-auto my-2   text-primary font-medium text-lg tracking-wider'>
                Other Links
            </div>
            <Link href='https://leetcode.com/u/yash_vaghani/' className='flex mx-auto my-2 ' target='_blank'>
                <div className='flex text-s text-primary ms-2'>LeetCode</div>
            </Link>
            <Link href="https://www.codechef.com/users/yashvaghani" className='flex mx-auto my-2 ' target='_blank'>
                <div className='flex text-s text-primary ms-2'>Code Chef</div>
            </Link>
        </div>
        
    </div>
  )
}

export default Footer
