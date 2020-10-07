import React from 'react'; 
import Particles from 'react-particles-js';
import './SpaceHeader.css'; 

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

  export default function SpaceHeader(){
    return (
        <div>
            <Particles id="particles"
                params={particleOptions}  />
            <div id="space-header">
                <h1>HI, UNIVERSE!</h1>
                <p>I'm a software developer</p>
            </div> 
        </div>
    ); 
  }
