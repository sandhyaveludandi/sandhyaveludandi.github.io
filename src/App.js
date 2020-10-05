import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import {Link} from 'react-scroll'; 
import Navbar from 'react-bootstrap/Navbar';


const particleOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: false,
                value_area: 1500
            }
        },
        shape: {
            stroke: {
                width: 0.8,
                color: "#45F0DF"
            },
            type: "star"
        },
        line_linked: {
            enable: false,
            distance: 90,
            opacity: 1,
            width: 1.5
        },
        move: {
            enable: true, 
            direction: "right",
            random: true, 
            straight: true, 
            speed: 0.25,
            out_mode: "out", 
        },
        size: {
            anim: {
                speed: 100, 
                size_min: 0.03
            },
            value: 1.25,
            random: true
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1.25,
                opacity_min: 0.3
            },
            value: 1, 
            random: true

        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true, 
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                line_linked: {
                    opacity: 0.85
                },
                distance: 90
            },
            push: {
                particles_nb: 1
            }
        }
    },
    retina_detect : true
  }

class App extends Component {
 
    render() {
        return (
            <div className="App">
                <div class="header" id="name">SANDHYA VELUDANDI</div>
                <div class='content'>
                    <Particles id="particles"
                            params={particleOptions}  />
                    <div id="space-header">
                        <h1>HI, UNIVERSE!</h1>
                        <p>I'm a software developer</p>
                    </div> 
                    <div class="header tabs-container" id="navbar">
                        <Link class='tab' activeClass="active" to="tab-about-me" smooth={true} duration={1000}>
                            About Me
                        </Link>
                        <Link class='tab' activeClass="active" to="tab-work-xp" smooth={true} duration={1000}>
                            Work Experience
                        </Link>
                        <Link class='tab' activeClass="active" to="tab-projects" smooth={true} duration={1000}>
                            Projects
                        </Link>
                        <Link class='tab' activeClass="active" to="tab-resume" smooth={true} duration={1000}>
                            Resume
                        </Link>
                    </div>
                    <main class="content main">
                        <section class="slide" id="tab-about-me">
                            <h1>About Me</h1>
                            <h3>something about me</h3>
                        </section>
                        <section class="slide" id="tab-work-xp">
                            <h1>Work Experience</h1>
                            <h3>something about work experience</h3>
                        </section>
                        <section class="slide" id="tab-projects">
                            <h1>Projects</h1>
                            <h3>something about projects</h3>
                        </section>
                        <section class="slide" id="tab-resume">
                            <h1>Resume</h1>
                            <h3>something about resume</h3>
                        </section>
                    </main>   
                </div> 
            </div>
        ); 
    }; 
};

export default App; 