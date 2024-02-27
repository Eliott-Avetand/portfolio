import styles from './CustomRoute.module.scss';
import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../Contexts/useContext';

interface customRouteProps {
    children: ReactNode
}

const CustomRoute = ({ children }: customRouteProps) => {
    const { dictionary } = useLanguage();
    const pageName = Object.keys(dictionary).some(page => page === location.pathname.split("/")[1])
        ? location.pathname.split("/")[1]
        : "notfound";
    
    return (
        <div className={styles.app}>
            <Navbar />
            <h1 className={styles.title}>{dictionary[pageName].title}</h1>
            {children}
            <Footer />
        </div>
    );
};
 
export default CustomRoute;