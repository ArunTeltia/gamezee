import React, { Fragment } from 'react'
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

                        <GameComponent game={game} />

                    )
                })}
            </div>
        </Fragment>
    )
}

export default GameList
