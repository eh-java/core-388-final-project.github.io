import '../App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import story from '../../storyNodes.json'

// home page for website
function Palestinian40s() {
    const [currentNode, setNode] = useState(story.find((({id}) => id == "start_palestine_40s")));
    const [prev, setPrev] = useState();

    function handleChoice(choice) {
        setNode(story.find(({id}) => id == choice.next));
    };

    return (
        <div className="game-div">
            <Link to='/' className='page-title'>CORE 388: Final Project, Eunice Hwang</Link>
            <div className='game-text'>
                <p>{currentNode.text.join(' ')}</p>
            </div>
            <div className="game-choices">
                {currentNode.choices.map(choice => <button className="button" key={choice.label} onClick={() => handleChoice(choice)}>{choice.label}</button>)}
            </div>
        </div>
    )
}

export default Palestinian40s;