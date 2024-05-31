import React from 'react'
import Image from 'next/image'
import heroimg from '@/public/hero-1.png'

const Heros = () => {
    return (
        <div className=' flex flex-col items-center justify-center max-w-5xl '>
            <div className=' flex items-center'>
                <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] '>
                    <Image
                        src="/hero-child.png"
                        fill
                        alt='img'
                        className=' object-contain'
                    />
                </div>
                <div className='relative w-[400px] h-[400px] hidden md:block  '>
                    <Image
                        src="/hero-cat.jpg"
                        fill
                        alt='img cats'
                        className=' object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Heros