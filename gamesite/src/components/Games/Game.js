import React from 'react'
import { useParams } from 'react-router-dom'
import TicTacToe from './TicTacToe/TicTacToe'
import Canvas from './Canvas/Canvas';
import Algorithm from './Algorithm/Algorithm';

import './Game.css';
import SideBarSort from './Algorithm/Sorting/SideBarSort/SortInput';

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
    } else if (id === "Algorithm") {
        return (
            <Algorithm />
        )
    } else if (id === "Sorting") {
        return (
            <SideBarSort />
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
