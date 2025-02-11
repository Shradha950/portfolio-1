import React from 'react'
import '../../IntroPage/Intro.css'
import { Navbar } from './Navbar';
import About from '../About';
import Main from './Main';
import ResumeBox from './ResumeBox';

export const HireMe = () => {
    return (
        <div className="min-h-screen ">
            <div className="grid md:grid-cols-2 lg:grid-cols-8 gap-8">
                {/* First Section */}
                <div className="order-1 flex justify-start col-span-2">
                    <ResumeBox />
                </div>
                
                {/* Second Section */}
                <div className="order-2 flex justify-center col-span-5 p-4 lg:p-24 ">
                    <Main />
                </div>
                
                {/* Third Section */}
                <div className="order-3 flex justify-center col-span-1">
                    <Navbar />
                </div>
            </div>
            
            {/* About Section */}
            {/* <div id="about" className="mt-12">
                <About />
            </div> */}
        </div>
    )
}
export default HireMe;
