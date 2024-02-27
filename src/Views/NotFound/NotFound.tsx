import { useEffect } from 'react';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import styles from './NotFound.module.scss';

const NotFound = () => {
    const { setFooterText } = useFooter();
    const { dictionary } = useLanguage();

    useEffect(() => {
        setFooterText(dictionary["notfound"].description);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.error}>
        </div>
    );
}

export default NotFound;
