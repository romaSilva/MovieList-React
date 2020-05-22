import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header() {
    return(
        <div className="header">
            <a href="index.html" className="logo">MovieList</a>
            <div className="icons">
                <a href="https://www.linkedin.com/in/romadasilva/" target="_blank">< FaLinkedinIn /></a>
                <a href="https://github.com/romaSilva" target="_blank">< FaGithub /></a>
            </div>
        </div>
    )
} 

export default Header