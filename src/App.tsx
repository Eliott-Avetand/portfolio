import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { customRoutes } from './Routes';
import ThemeContext from './Theme/ThemeContext.tsx';
import Navbar from './Components/Navbar/Navbar';
import styles from './App.module.scss';
import Landing from './Views/Landing/Landing.tsx';
import Loading from './Views/Loading/Loading.tsx';
import Footer from './Components/Footer/Footer.tsx';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isDark } = useContext(ThemeContext);
    const [visited, setVisited] = useState(localStorage.getItem('visited') !== null)
    const [hasInteracted, setHasInteracted] = useState<boolean>(false)

    const isInMainMenu = () => {
        return location.pathname === '/' || !hasInteracted;
    }

    const routes = customRoutes.map((route, index) => {
        const Component = route.component;

        return (
            <Route
                key={index}
                path={route.path}
                element={<Component />}
            />
        )
    });

    useEffect(() => {
        if (!visited)
            navigate('/');
    }, [visited, navigate])

    useEffect(() => {
        if (!hasInteracted)
            navigate('/');
        else
            navigate('/home');
    }, [hasInteracted])
    
 
    return (
        <div className={`${styles.app} ${isDark ? 'theme--dark' : 'theme--light'} ${!isInMainMenu() ? styles.inApp : ""}`}>
            {
                !visited
                ? <Loading setVisited={setVisited} />
                : isInMainMenu()
                    ? <Landing setHasInteracted={setHasInteracted} />
                    : <>
                        <Navbar />
                        <Routes>
                            {routes}
                        </Routes>
                        <Footer text='azeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' keys={["Echap", "Entrée"]} />
                    </>
            }
        </div>
    );
}

export default App
