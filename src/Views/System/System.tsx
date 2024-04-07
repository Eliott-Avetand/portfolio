import { useEffect } from 'react';
import styles from './System.module.scss';
import Button from '../../Components/Button/Button';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Languages from './Views/Languages/Languages';
import Modes from './Views/Modes/Modes';
import TextPanel from './Views/TextPanel/TextPanel';
import Sound from './Views/Sound/Sound';

const System = () => {
    const navigate = useNavigate();
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    const callbacks: { [fnName: string]: () => void } = {
        languagesCallback: () => navigate("languages"),
        modesCallback: () => navigate("modes"),
        soundCallback: () => navigate("sound"),
        attributionsCallback: () => navigate("attributions"),
        nierCallback: () => navigate("nier"),
        legalNoticeCallback: () => navigate("legalNotice")
    }

    useEffect(() => {
        setFooterText(dictionary.system.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.system}>
            <div className={styles.menu}>
                <div className={styles.items}>
                    {dictionary["system"].buttons.map((button, index) => (
                        <Button
                            key={index}
                            btnName={button.title}
                            btnDescription={button.footer}
                            callback={callbacks[button.callback]}
                        />
                    ))}
                </div>
            </div>
            <Routes>
                <Route path="languages" element={<Languages />} />  
                <Route path="modes" element={<Modes />} />
                <Route path="sound" element={<Sound />} />
                <Route path="attributions" element={<TextPanel title={"Attributions"} text={"Lorem Ipsum"} />} />
                <Route path="nier" element={<TextPanel title={"Nier:Automata"} text={"Lorem Ipsum"} />} />
                <Route path="legalNotice" element={<TextPanel title={"Mentions légales"} text={"Lorem Ipsum"} />} />
            </Routes>
        </div>
    );
}

export default System;
