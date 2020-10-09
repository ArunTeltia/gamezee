import React from 'react'
import './Games.css';
import Navbar from '../Navbar/Navbar';
import TicTacToe from './TicTacToe/TicTacToe';
import GameList from './GameList/GameList';


const Games = () => {
    return (
        <div className="gamesection">
            <GameList/>
        </div>
    )
}

export default Games;
