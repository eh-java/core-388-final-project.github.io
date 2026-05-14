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
            <div className='year'>{currentNode.year}</div>
            <div className={currentNode.type == "fact" ? 'fact-text' : 'game-text'}>
                <p>{currentNode.text.join(' ')}</p>
            </div>
            <div className="game-choices">
                {currentNode.end ? <Link to='/pick-time' className='button'>Try another perspective.</Link> : currentNode.choices.map(choice => <button className="button" key={choice.label} onClick={() => handleChoice(choice)}>{choice.label}</button>)}
            </div>
            <div className='footnote'>
                {currentNode.footnotes ? currentNode.footnotes.map((note, index) => <p key={index}>{note}</p>) : <p></p>}
            </div>
        </div>
    )
}

export default Palestinian40s;