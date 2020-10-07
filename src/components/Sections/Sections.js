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
                <h1>Resume</h1>
                <h3>something about resume</h3>
            </section>
        </main>
    ); 
    
}