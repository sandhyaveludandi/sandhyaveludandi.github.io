import React from 'react'; 
import {Link} from 'react-scroll'; 
import './NavBar.css'; 

export default function NavBar(){
    return (
        <div class="tabs-container" id="navbar">
            <Link className='tab' activeClass="active" spy={true} to="tab-about-me" smooth={true} duration={1000}>
                About Me
            </Link>
            <Link className='tab' activeClass="active" spy={true} to="tab-work-xp" smooth={true} duration={1000}>
                Work Experience
            </Link>
            <Link className='tab' activeClass="active" spy={true} to="tab-projects" smooth={true} duration={1000}>
                Projects
            </Link>
            <Link className='tab' activeClass="active" spy={true} to="tab-resume" smooth={true} duration={1000}>
                Resume
            </Link>
        </div>
    ); 
  }