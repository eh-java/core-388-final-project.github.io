import '../App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import story from '../../storyNodes.json'

// home page for website
function Israeli40s() {
    const [text, setText] = useState(story[2].text[0]);
    const [choiceA, setChoiceA] = useState('');
    const [choiceB, setChoiceB] = useState('');
    

    return (
        <div className="parent-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>{text}</p>
            </div>
            <div className="default">
                <Link to='/pick-perspective-40s' className="button">1940s</Link>
                <button className="button">TBD</button>
            </div>
        </div>
    )
}

export default Israeli40s;