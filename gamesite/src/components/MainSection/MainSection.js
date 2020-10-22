import React from 'react'
import Navbar from '../Navbar/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './MainSection.css'

const MainSection = () => {
    return (

        <div className="mainsection">
            <Navbar message="Register" />
            <div className="gamesite_logo">
                GAMEZONE
            </div>
            <div className="desc_of_site">
                A site where all games are written in javascript
            </div>
            <div className="desc_of_site">
                This site under construction "\ ^o^ /"
            </div>
            <div className='buttons_main_site'>
                <div className="check_popular_games">
                    <Link to='/gamelist'>
                        <button className="getstarted_button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        Popular Games
                        </button>
                    </Link>
                </div>
                <div className="discover_more_games">
                    <Link to='/gamelist'>
                        <button className="getstarted_button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        EXPLORE MORE
                    </button>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default MainSection
