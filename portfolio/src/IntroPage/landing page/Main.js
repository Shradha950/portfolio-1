import React from 'react'
import myProject from "../landing page/myProject.png";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { Icon } from '@iconify/react/dist/iconify.js';
import '../../IntroPage/Intro.css'
import About from '../About';

export default function Main() {
    return (
        <div className='flex flex-col gap-6'>
            <div className="flex flex-col  gap-8 second_section h-screen">
                <div className="flex justify-start ">
                    <div>
                        <button className="flex rounded-full border border-gray-500 shadow-xl px-3 py-2 gap-2 ">
                            <p className="text-white">
                                <Icon icon="material-symbols:home-outline" />
                            </p>
                            <p className="text-white text-xs">INTRODUCTION</p>
                        </button>
                    </div>
                </div>
                <div className="text-left flex flex-col justify-between">
                    <div>
                        <h3 className="text-7xl font-extralight text-white leading-tight">
                            Say Hi from <span className="text-Green">Shradha</span>, Webflow
                            Designer and Developer
                        </h3>
                        <p className="text-left text-base text-gray-400 mt-10">
                            I design and code beautifully simple things and I love what I do.
                            <br /> Just simple like that!
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <a className="myProjects" href='#'>
                            <img className="myProject_img" src={myProject} />
                            <span className="text-white absolute m-auto">
                                <ArrowDownwardOutlinedIcon style={{ fontSize: "36px" }} />
                            </span>
                        </a>
                    </div>
                    <div className="flex gap-28 mt-12 project_number">
                        {/* First Div - Left to Right */}
                        <div className="flex flex-col gap-4 animate-left">
                            <h1 className="text-Green text-7xl">
                                1+
                            </h1>
                            <p className="text-gray-400 text-base uppercase w-24 text-sm">
                                Years of Experience
                            </p>
                        </div>

                        {/* Second Div - Right to Left */}
                        <div className="flex flex-col gap-4 animate-right">
                            <h1 className="text-Green text-7xl">
                                3+
                            </h1>
                            <p className="text-gray-400 text-base uppercase w-48 text-sm">
                                projects completed on 2 countries
                            </p>
                        </div>
                    </div>
                

                </div>
            </div>
            <div id='about'>
                <About />
            </div>
        </div>
    )
}
