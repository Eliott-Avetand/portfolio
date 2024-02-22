import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { customRoutes } from './Routes';
import ThemeContext from './Theme/ThemeContext.tsx';
import Navbar from './Components/Navbar/Navbar';
import styles from './App.module.scss';
import Landing from './Views/Landing/Landing.tsx';

function App() {
    const { isDark } = useContext(ThemeContext);
    const [hasInteracted, setHasInteracted] = useState(false);

    addEventListener('click', () => { setHasInteracted(true); });

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

    return (
        <div className={`${styles.app} ${isDark ? 'theme--dark' : 'theme--light'} ${hasInteracted ? styles.inApp : ""}`}>
            <audio src="" id="soundElement" />
            {
                hasInteracted ? <>
                    <Navbar />
                    <Routes>
                        {routes}
                    </Routes>
                </> : <Landing />
            }
        </div>
    );
}

export default App
