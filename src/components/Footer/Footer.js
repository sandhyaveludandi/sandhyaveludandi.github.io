import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

export default function Footer() {
    return (
        <div>
            <footer>
                <h1 class="flex-container">
                <a href="mailto:sdvelu18@gmail.com">Link text</a>
                    <a href="https://google.com"><FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} /></a>
                    <a href="mailto:sdvelu18@gmail.com?
                             cc=sv549@scarletmail.rutgers.edu&
                             subject=Greeting Email"><FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
                    <a href="https://www.linkedin.com/in/sandhyaveludandi/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                    <a href="https://github.com/sandhyaveludandi"><FontAwesomeIcon className="icon" icon={faGithubSquare} /></a>
                </h1>
            </footer>
        </div>
    ); 
}