import React from 'react'
import logo from './img.jpg';

import '../../IntroPage/Intro.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function ResumeBox() {
  return (
    <div>
        <div className="m-5 flex justify-start  lg:fixed col-span-3">
                    <div className="left_sidebar">
                        <div className="top_bar gap-4">
                            <p className="name">Shradha</p>
                            <p className="designation">
                                Frontend <span>Developer</span>
                            </p>
                        </div>
                        <div>
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <div>
                            <p className="para_name flex flex-col">
                                Shradha Sharma Based in Chandigarh
                                <span className="text-xs font-base font-medium">
                                    {" "}
                                    shradhasharma950@gmail.com
                                </span>
                            </p>
                            <ul className="lists">
                                <li>
                                    <a>
                                        <GitHubIcon />
                                    </a>
                                </li>
                                <li>
                                    <XIcon />
                                </li>
                                <li>
                                    <InstagramIcon />
                                </li>
                                <li>
                                    <a
                                        target="blank"
                                        href="https://www.linkedin.com/in/shradha-sharma-055031201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMosLkjZiTteeefSkHvNfgQ%3D%3D"
                                    >
                                        <LinkedInIcon />
                                    </a>
                                </li>
                            </ul>
                            <button className="buttons">
                                <a
                                    target="blank"
                                    href="https://drive.google.com/file/d/1p_rll3VahIJ7z6tBE9Ts6cirhKUFRwlW/view?usp=sharing"
                                    download="Your-Resume.pdf"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <span>
                                        <MailOutlineIcon />
                                    </span>
                                    <span className="hireMe pl-1">HIRE ME!</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  )
}
