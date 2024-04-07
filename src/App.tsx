import "./Theme/styles.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Import the routes
import Home from './Views/Home/Home';
import Projects from './Views/Projects/Projects';
import Contact from './Views/Contact/Contact';
import System from './Views/System/System';
import CustomRoute from './Components/Routes/CustomRoute';
import Landing from "./Views/Landing/Landing";
import NotFound from "./Views/NotFound/NotFound";

function App() {
    const [hasInteracted, setHasInteracted] = useState<boolean>(false);
    
    return (
        !hasInteracted
        ? <Landing setHasInteracted={setHasInteracted} />
        : <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<CustomRoute children={<Home />} pageName="home" />} />
            <Route path="projects" element={<CustomRoute children={<Projects />} pageName="projects" />} />
            <Route path="contact" element={<CustomRoute children={<Contact />} pageName="contact" />} />
            <Route path="system/*" element={<CustomRoute children={<System />} pageName="system" />} />
            <Route path="*" element={<CustomRoute children={<NotFound />} pageName="notFound" />} />
        </Routes>
    );
}

export default App;
