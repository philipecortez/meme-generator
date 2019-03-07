import React from 'react'
import './Header/Header.css'

const Header = () => (
    <header className="app-header">
        <img
            className="logo"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="problem?"
        />
        <p style={{float: "left"}}>Meme Generator</p>
    </header>
)

export default Header