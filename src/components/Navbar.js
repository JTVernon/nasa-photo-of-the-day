import React from "react";  
import { Link } from "react-router-dom"; 

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="glow-on-hover" to = "/">Ok I want to go home now</Link>
            </ul>
        </div>
    );
}
