import styles from './System.module.scss';
import Button from '../../Components/Button/Button';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import { callbacks } from './Callbacks/SystemCallbacks';
import { Link, Route, Routes } from 'react-router-dom';
import Languages from './Views/Languages/Languages';
import Modes from './Views/Modes/Modes';
import { useEffect } from 'react';

const System = () => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    useEffect(() => {
        setFooterText(dictionary["system"].description);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.system}>
            <div className={styles.menu}>
                <div className={styles.items}>
                    {dictionary["system"].buttons.map((button, index) => (
                        <Link to={button.title.toLowerCase()} key={index}><Button
                            callback={callbacks[button.callback]}
                            btnName={button.title}
                            btnDescription={button.description}
                        /></Link>
                        ))}
                </div>
            </div>
            <Routes>
                <Route path="languages" element={<Languages />} />  
                <Route path="modes" element={<Modes />} />
            </Routes>

            {/* <Scrollable
                title={dictionary["system"].texts.legalNotice.title}
                texts={dictionary["system"].texts.legalNotice.texts}
                className={`${styles.zone2} legalNotice`}
            />
            <Scrollable
                title={dictionary["system"].texts.nier.title}
                texts={dictionary["system"].texts.nier.texts}
                className={`${styles.zone2} nier`}
            />
            <Scrollable
                title={dictionary["system"].texts.attributions.title}
                texts={dictionary["system"].texts.attributions.texts}
                className={`${styles.zone2} attributions`}
            /> */}
        </div>
    );
}

export default System;
