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
            <div className='column-default'>
                <embed
                    src={`${import.meta.env.BASE_URL}sources.pdf`}
                    type='application/pdf'
                    width='850px'
                    height='1100px'
                />
            </div>
        </div>
    )
}

export default Sources;