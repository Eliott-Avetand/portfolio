import { ReactNode } from 'react';
import { application } from '../../Interfaces/Generic.interface';
import styles from './CustomRoute.module.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useLanguage } from '../../Contexts/useContext';

interface customRouteProps {
    children: ReactNode,
    pageName: string
}

const CustomRoute = ({ children, pageName }: customRouteProps) => {
    const { dictionary } = useLanguage();

    return (
        <div className={styles.app}>
            <Navbar />
            <h1 className={styles.title}>{dictionary[pageName as keyof application].title}</h1>
            {children}
            <Footer />
        </div>
    );
};
 
export default CustomRoute;