import { Route, Routes } from 'react-router-dom';
import { customRoutes } from './Routes';
import Navbar from './Components/Navbar/Navbar';

function App() {
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
        <div>
            <Navbar />
            <Routes>
                {routes}
            </Routes>
        </div>
    );
}

export default App
