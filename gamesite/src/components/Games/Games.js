import React from 'react'
import './Games.css';
import Navbar from '../Navbar/Navbar';
import GameList from './GameList/GameList';


const Games = () => {
    return (
        <div className="gamesection">
            <Navbar message="Register" />
            <GameList/>
        </div>
    )
}

export default Games;
