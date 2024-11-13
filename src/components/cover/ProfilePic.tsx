import React from 'react'
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <div className="">
        <Image
            alt="Yash Vaghani"
            src="/images/roundedPic1.png"
            height={120}
            width={120}
            className="object-cover border-4 border-w   hite rounded-full shadow-md"
        />
    </div>
  )
}

export default ProfilePic
