import React from 'react'
import Navbar from '../../Navbar/Navbar';
import AlgoList from '../GameList/GameList';
import data from './algodata';
import './Algorithm.css';

const Algorithm = () => {
    return (
        <div class="algorithm">
            <Navbar message="Give a Star in Github" />
            <AlgoList data={data} heading="Algorithms" />
        </div>
    )
}

export default Algorithm
