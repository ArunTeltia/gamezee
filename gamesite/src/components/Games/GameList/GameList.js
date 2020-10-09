import React, { Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom';
import GameData from './gamedata';
import GameComponent from '../GameComponent/GameComponent';
import './GameList.css'
const GameList = () => {
    console.log(GameData);
    return (
        <Fragment>
            <center>
                <h1>Game List</h1>
            </center>
            <div className="card_list">
                {GameData.map(game => {
                    return (
                        <Link to={`/game/${game.game_name}`} >
                            <GameComponent game={game} />
                        </Link>
                    )
                })}
            </div>
        </Fragment >
    )
}

export default GameList
