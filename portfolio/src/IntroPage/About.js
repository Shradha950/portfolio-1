import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
export default function About() {
    return (
        <div className="flex flex-col justify-center h-screen ">
            <div className="flex justify-left mb-10">
                <div className=''>
                    <button className="flex rounded-full border border-gray-500 shadow-xl px-5 py-2 gap-3 ">
                        <p className="text-white">
                            <Icon icon="material-symbols:person-outline" />
                        </p>
                        <p className="text-white text-xs">About</p>
                    </button>
                </div>
            </div>
            <div className="text-left flex flex-col justify-between">
                <h1 className='text-5xl about_heading text-white'>
                    Every great design begin with
                    an even <span className='text-Green'> better story </span>
                </h1>
                <p className='about_me text-left text-base text-gray-400 mt-6'>
                    Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
                </p>
            </div>
        </div>

    )
}
