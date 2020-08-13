import React from 'react';
import './Joke.css';

const Joke = props => {
        return (
            <div className="Joke">
                    <div className="joke">{props.text}</div>
            </div>
        );
};

export default Joke;