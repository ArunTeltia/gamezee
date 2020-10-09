import React, { useState } from 'react';
import './TicTacToe.css';
import CreateGame from './CreateGame';
import JoinGame from './JoinGame';
import Game from './game';

const TicTacToe = () => {
    const [showGame, setShowGame] = useState(false);
    const [name, setName] = useState('');
    const [gameId, setGameId] = useState('');

    const onFormSubmit = (name, gameId = '') => {
        setName(name);
        setGameId(gameId);
        setShowGame(true);
    };

    return (
        <div className="container">
            <h1>Multiplayer X-O</h1>
            {!showGame && (
                <>
                    <CreateGame onFormSubmit={onFormSubmit} />
                    <h4>---------- OR ----------</h4>
                    <JoinGame onFormSubmit={onFormSubmit} />
                </>
            )}

            {showGame && <Game name={name} gameId={gameId} />}
        </div>
    );
};

export default TicTacToe;
