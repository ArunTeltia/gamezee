import React, { useState } from 'react';
import './CreateGame.css';

const CreateGame = ({ onFormSubmit }) => {
    const [name, setName] = useState('');

    return (
        <div className="container">
            <h1>Create new game</h1>
            <div className="form-group row">
                <div className="col">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <button onClick={() => onFormSubmit(name)} className="getstarted_button">
                        Create Game
          </button>
                </div>
            </div>
        </div>
    );
};

export default CreateGame;
