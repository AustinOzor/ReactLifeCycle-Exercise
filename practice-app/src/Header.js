import React from "react"
import reactLogo from "./images/logo512.png";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt=""/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

