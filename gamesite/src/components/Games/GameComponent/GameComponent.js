import React, { Fragment } from 'react'
import './GameComponent.css'

const GameComponent = (props) => {
    console.log(props.game)
    return (
        <div className="card_image_content">
            <div class="game_component">
                <div className="game_card"
                    style={{ backgroundImage: `url(${props.game.game_image})` }}
                >
                </div>

            </div>
            <div className="heading_of_game">
                {props.game.game_name}
            </div>
        </div>
    )
}

export default GameComponent
