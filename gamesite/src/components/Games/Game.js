import React from 'react'
import { useParams } from 'react-router-dom'
import TicTacToe from './TicTacToe/TicTacToe'
import Canvas from './Canvas/Canvas';
import './Game.css';
const Game = (props) => {
    let { id } = useParams();

    if (id === "TicTacToe") {
        return (
            <TicTacToe />
        )
    } else if (id === "Canvas") {
        return (
            <Canvas />
        )
    } else {
        return (
            <center>
                <h1>404 No page Found</h1>
            </center>
        )
    }
}

export default Game
