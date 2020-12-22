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
                <h3> Something about Projects</h3>
            </section>
            <section class="slide" id="tab-resume">
                <embed 
                    src="https://drive.google.com/file/d/1K79hN6_gzvd513rGvrJ_KMX7-Eaf1id5/preview" 
                    type="application/pdf" 
                    width="800" 
                    height="1000" 
                    overflow="hidden"
                />  
            </section>
        </main>
    ); 
    
}