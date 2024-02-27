import { useEffect } from 'react';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import Button from '../../Components/Button/Button';
import styles from './Home.module.scss';
import { useFooter, useLanguage } from '../../Contexts/useContext';

const Home = () => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    useEffect(() => {
        setFooterText(dictionary["home"].description);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.home}>
            <div className={styles.menu}>
                <p>{dictionary["home"].texts.description.texts[0]}</p>
                <Button
                    btnName={dictionary["home"].buttons[0].title}
                    btnDescription={dictionary["home"].buttons[0].description}
                    callback={() => {}}
                />
                <Button
                    btnName={dictionary["home"].buttons[1].title}
                    btnDescription={dictionary["home"].buttons[1].description}
                    callback={() => {}}
                />
            </div>
            <MainInfo />
        </div>
    );
}

export default Home;
