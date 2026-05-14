// App.jsx file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import PickPerspective from "./pages/ChoosePerspective.jsx";
import Sources from "./pages/Sources.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pick-perspective' element={<PickPerspective/>}/>
                <Route path='/sources' element={<Sources/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;