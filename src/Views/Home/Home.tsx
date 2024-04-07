import { useEffect } from 'react';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import Button from '../../Components/Button/Button';
import styles from './Home.module.scss';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    const callbacks: { [fcName: string]: () => void } = {
        informationCallback: () => {
            navigate("/system/nier");
        },
        projectsCallback: () => {
            navigate("/projects");
        }
    }

    useEffect(() => {
        setFooterText(dictionary.home.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.home}>
            <div className={styles.menu}>
                <p>{dictionary.home.text}</p>
                {
                    dictionary.home.buttons.map((button, index) => (
                        <Button
                            key={index}
                            btnName={button.title}
                            btnDescription={button.footer}
                            callback={callbacks[button.callback]}
                        />
                    ))
                }
            </div>
            <MainInfo />
        </div>
    );
}

export default Home;
