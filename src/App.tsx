import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ThemeContext from './Theme/ThemeContext.tsx';
import Navbar from './Components/Navbar/Navbar';
import styles from './App.module.scss';
import Landing from './Views/Landing/Landing.tsx';
import Footer from './Components/Footer/Footer.tsx';
import LanguageProvider from './Contexts/Language.context.tsx';
import { useLanguage } from './Contexts/useContext';

// Import the routes
import Home from './Views/Home/Home.tsx';
import Projects from './Views/Projects/Projects.tsx';
import Contact from './Views/Contact/Contact.tsx';
import System from './Views/System/System.tsx';
import PrivateRoute from './Components/Routes/RouteGuard.tsx';

function App() {
    const location = useLocation();
    const { isDark } = useContext(ThemeContext);
    const { dictionary } = useLanguage();

    const [hasInteracted, setHasInteracted] = useState<boolean>(false);
    const [pageName, setPageName] = useState<string>("");
    const [footerText, setFooterText] = useState<string>("");

    const isInMainMenu = () => {
        return location.pathname === '/' || !hasInteracted;
    }

    useEffect(() => {
        let page = location.pathname.split("/")[1];
        page = page === "" ? "home" : page;

        setPageName(page);
        setFooterText(dictionary[page].description);
    }, [dictionary, location.pathname]);

    return (
        <LanguageProvider>
            <div className={`${isDark ? 'theme--dark' : 'theme--light'} ${styles.app}  ${!isInMainMenu() ? styles.inApp : ""}`}>
                {!isInMainMenu() ? <>
                    <Navbar setFooterText={setFooterText} /> : <></>
                    <h1 className={styles.title}>{dictionary[pageName].title}<i></i></h1>
                </> : <></>}
                <Routes>
                    <Route path='/' element={<Landing setHasInteracted={setHasInteracted} />} />
                    <Route path="/home" element={<PrivateRoute hasInteracted={hasInteracted} />}>
                        <Route path="/home" element={<Home setFooterText={setFooterText} />} />
                    </Route>
                    <Route path="/projects" element={<PrivateRoute hasInteracted={hasInteracted} />}>
                        <Route path="/projects" element={<Projects setFooterText={setFooterText} />} />
                    </Route>
                    <Route path="/contact" element={<PrivateRoute hasInteracted={hasInteracted} />}>
                        <Route path="/contact" element={<Contact setFooterText={setFooterText} />} />
                    </Route>
                    <Route path="/system" element={<PrivateRoute hasInteracted={hasInteracted} />}>
                        <Route path="/system" element={<System setFooterText={setFooterText} />} />
                    </Route>
                </Routes>
                {!isInMainMenu() ? <Footer text={footerText} keys={[]} /> : <></>}
            </div>
        </LanguageProvider>
    );
}

export default App
