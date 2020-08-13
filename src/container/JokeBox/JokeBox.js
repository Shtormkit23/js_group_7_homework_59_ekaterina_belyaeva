import React, {useEffect, useState} from 'react';
import './JokeBox.css';
import Joke from "../../components/Joke/Joke";

const url = 'https://api.chucknorris.io/jokes/random';

const JokeBox = () => {
    const [anecdotes, setAnecdotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            if(response.ok) {
                const joke = await response.json();
                setAnecdotes(joke);
            }
        };

        fetchData().catch(e => console.error(e))
    }, []);



    return (
        <>
            <div className='image-block'>
                <img src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' alt="img-chucknorris"/>
            </div>
            <div className="joke-block">
                <Joke key={anecdotes.id} text={anecdotes.value}/>
            </div>
        </>
    );
};

export default JokeBox;