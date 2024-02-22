import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { customRoutes } from './Routes';
import ThemeContext from './Theme/ThemeContext.tsx';
import Navbar from './Components/Navbar/Navbar';

function App() {
    const { isDark } = useContext(ThemeContext);

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
        <div className={isDark ? 'theme--dark': 'theme--light'}>
            <Navbar />
            <Routes>
                {routes}
            </Routes>
        </div>
    );
}

export default App
