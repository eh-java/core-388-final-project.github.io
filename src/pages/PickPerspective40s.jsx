import '../App.css';
import { Link } from 'react-router-dom';

// home page for website
function PickPerspective40s() {
    return (
        <div className="parent-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>Pick a perspective.</p>
            </div>
            <div className="default">
                <Link to="/israeli-40s" className="button">ISRAELI</Link>
                <button className="button">PALESTINIAN</button>
            </div>
        </div>
    )
}

export default PickPerspective40s;