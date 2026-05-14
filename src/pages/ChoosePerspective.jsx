import '../App.css';

// home page for website
function PickPerspective() {
    return (
        <div className="parent-div">
            <p className='page-title'>CORE 388: Final Project, Eunice Hwang</p>
            <div className='title'>
                <p>Pick a perspective.</p>
            </div>
            <div className="default">
                <button className="button">ISRAELI</button>
                <button className="button">PALESTINIAN</button>
            </div>
        </div>
    )
}

export default PickPerspective;