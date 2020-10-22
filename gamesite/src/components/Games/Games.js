import React from 'react'
import './Games.css';
import Navbar from '../Navbar/Navbar';
import GameList from './GameList/GameList';
import data from './GameList/gamedata';

const Games = () => {
    return (
        <div className="gamesection">
            <Navbar message="Register" />
            <GameList data={data} heading="Games" />
        </div>
    )
}

export default Games;
