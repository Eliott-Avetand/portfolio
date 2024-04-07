import { useEffect } from 'react';
import Button from '../../Components/Button/Button';
import styles from './Projects.module.scss';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { useFooter, useLanguage } from '../../Contexts/useContext';

const Projects = () => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    useEffect(() => {
        setFooterText(dictionary.projects.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.projects}>
            <div className={styles.menu}>
                { dictionary.projects.buttons.map((button, index) => (
                    <Button
                        key={index}
                        btnName={button.title}
                        btnDescription={button.footer}
                        callback={() => {}}
                    />
                )) }
            </div>
            <MainInfo />
        </div>
    );
}

export default Projects;
