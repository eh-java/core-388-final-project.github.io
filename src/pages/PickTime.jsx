import '../App.css';
import { Link } from 'react-router-dom';

// home page for website
function PickTime() {
    return (
        <div className="home-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>Pick a time period.</p>
            </div>
            <div className="default">
                <Link to='/pick-perspective-40s' className="button">1940s</Link>
                <button className="button">TBD</button>
            </div>
        </div>
    )
}

export default PickTime;