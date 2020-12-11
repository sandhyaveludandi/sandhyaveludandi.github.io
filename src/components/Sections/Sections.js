import React from 'react'; 
import './Sections.css'; 

export default function Sections() {
    return (
        <main class="main">
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
                <div>
                    <iframe
                        title="My Daily Marathon Tracker"
                        src='https://drive.google.com/file/d/1K79hN6_gzvd513rGvrJ_KMX7-Eaf1id5/view?usp=sharing'
                        width="500"
                        height="678"
                    >
                        <p>This browser does not support PDF!</p>
                    </iframe>
                </div>
            </section>
        </main>
    ); 
    
}