import React from "react"; 
import { Link } from "react-router-dom";

export default function Home() {

    return (
    <div className="home">
      <Link className="glow-on-hover" to="/nasaphoto">To infinity and beyond!</Link>
    </div>
    )
}