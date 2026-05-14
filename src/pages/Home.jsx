import '../App.css';

// home page for website
function Home() {
    return (
        <div className="parent-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>WHAT IF IT WERE YOU?</p>
                <p className='sub-title'>Exploring Israeli and Palestinian Narratives</p>
            </div>
            <div className="default">
                <button className="button">PLAY</button>
                <p></p>
                <button className="button">SOURCES</button>
            </div>
        </div>
    )
}

export default Home;