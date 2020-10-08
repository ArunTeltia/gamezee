import React from 'react'
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="left_navbar">
                <h1>Project Sakura</h1>
                <h6 class="feels_like_spring"><i>Feels like spring.</i></h6>
            </div>
            <div class="spacer" />
            <div className="right_navbar">
                <button className="getstarted_button">{props.message}</button>
            </div>
        </div>
    )
}

export default Navbar
