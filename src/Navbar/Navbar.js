import React from 'react'
import "./Navbar.css";

function Navbar() {

    return (
        <>
            <div className="nav">
                {/* Nav toggle input */}
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        LOGO
                    </div>
                </div>

                {/* Nav toggle button */}
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                
                {/* Nav links */}
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/career">Career</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
