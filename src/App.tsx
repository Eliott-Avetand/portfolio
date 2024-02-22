import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { customRoutes } from './Routes';
import ThemeContext from './Theme/ThemeContext.tsx';
import Navbar from './Components/Navbar/Navbar';
import styles from './App.module.scss';
import Landing from './Views/Landing/Landing.tsx';
import Loading from './Views/Loading/Loading.tsx';

function App() {
    const { isDark } = useContext(ThemeContext);
    const [hasInteracted, setHasInteracted] = useState<boolean>(false);
    const firstVisit = localStorage.getItem('visited') == null;

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
                firstVisit
                ? <Loading />
                : hasInteracted
                    ? <>
                        <Navbar />
                        <Routes>
                            {routes}
                        </Routes> </>
                    : <Landing setHasInteracted={setHasInteracted} />
            }
        </div>
    );
}

export default App
