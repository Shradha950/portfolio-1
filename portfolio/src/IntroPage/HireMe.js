import React from 'react'
import './Intro.css'
import logo from "./img.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export const HireMe = () => {
    return (
        <div className='left_sidebar'>
            <div className='top_bar'>
                <p className='name'>Shradha  </p>
                <p className='designation'>Frontend <span>  Developer</span></p>
            </div>
            <div>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div>
                <p className='para_name'>Shradh Sharma Based in Chandigarh
                    <span className='text-xs '> shradhasharma950@gmail.com</span></p>

                <ul className='lists'>
                    <li><GitHubIcon /></li>
                    <li> <XIcon /> </li>
                    <li><InstagramIcon/></li>
                    <li><LinkedInIcon/></li>
                </ul>
                <button className='buttons'><EmailIcon/> HIRE ME </button>
            </div>
        </div>
    )
}
