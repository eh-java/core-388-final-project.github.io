import '../App.css';
import { Link } from 'react-router-dom';

// home page for website
function PickPerspective40s() {
    return (
        <div className="home-div">
            <Link to='/' className='page-title'>CORE 388: Final Project, Eunice Hwang</Link>
            <div className='title'>
                <p>Pick a perspective.</p>
            </div>
            <div className="default">
                <Link to="/israeli-40s" className="button">ISRAELI</Link>
                <Link to="/palestinian-40s" className="button">PALESTINIAN</Link>
            </div>
        </div>
    )
}

export default PickPerspective40s;