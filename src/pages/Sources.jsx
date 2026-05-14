import '../App.css';
import { Link } from 'react-router-dom';

// home page for website
function Sources() {
    return (
        <div className="home-div">
            <Link to='/' className='page-title'>CORE 388: Final Project, Eunice Hwang</Link>
            <div className='title'>
                <p>SOURCES</p>
            </div>
            <div className="default">
                <button className="button">ISRAELI</button>
                <button className="button">PALESTINIAN</button>
            </div>
        </div>
    )
}

export default Sources;