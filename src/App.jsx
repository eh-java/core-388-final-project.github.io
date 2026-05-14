// App.jsx file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import PickPerspective40s from "./pages/PickPerspective40s.jsx";
import Sources from "./pages/Sources.jsx";
import PickTime from "./pages/PickTime.jsx";
import Israeli40s from "./pages/Israeli40s.jsx";
import Palestinian40s from "./pages/Palestinian40s.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pick-time' element={<PickTime/>}/>
                <Route path='/pick-perspective-40s' element={<PickPerspective40s/>}/>
                <Route path='/israeli-40s' element={<Israeli40s/>}/>
                <Route path='/palestinian-40s' element={<Palestinian40s/>}/>
                <Route path='/sources' element={<Sources/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;