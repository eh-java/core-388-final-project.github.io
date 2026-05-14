import '../App.css';
import { Link } from 'react-router-dom';

// home page for website
function Home() {
    return (
        <div className="parent-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>WHAT IF IT WERE YOU?</p>
                <p className='sub-title'>Exploring Israeli and Palestinian Narratives</p>
            </div>
            <div className="column-default">
                <Link to='/pick-time' className="button">PLAY</Link>
                <Link to='/sources' className="button">SOURCES</Link>
            </div>
        </div>
    )
}

export default Home;