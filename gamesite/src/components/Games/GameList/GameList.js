import React, { Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom';

import GameComponent from '../GameComponent/GameComponent';
import './GameList.css'
const GameList = (props) => {

    return (
        <Fragment>
            <center>
                <h1>{props.heading}</h1>
            </center>
            <div className="card_list">
                {props.data.map(game => {
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
