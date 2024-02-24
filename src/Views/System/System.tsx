import Separator from '../../Components/Separator/separator';
import styles from './System.module.scss';
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/Button/Button';
import { useEffect, useState } from 'react';
import SystemInfo from '../../Components/BoxInfos/SystemInfo/SystemInfo';

const System = () => {
    const systemFooter = "Informations techniques du site et attributions.";
    const [footerText, setFooterText] = useState<string>(systemFooter);

    useEffect(() => {
        if (footerText === "")
            setFooterText(systemFooter);
    }, [footerText, setFooterText])
    

    return (
        <div className={styles.system}>
            <h1>SYSTÈME</h1>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Separator />
                    <div className={styles.menu}>
                        <Button btnName='Mentions légales' btnDescription="Mentions légales et obligatoires du site." setFooterText={setFooterText} />
                        <Button btnName='NieR:Automata' btnDescription="Place de NieR:Automata." setFooterText={setFooterText} />
                        <Button btnName='Attributions' btnDescription="Attributions aux différentes images et références." setFooterText={setFooterText} />
                    </div>
                </div>
                <SystemInfo />
            </div>
            <Footer text={footerText} keys={["Echap", "Entrée"]} />
        </div>
    );
}

export default System;
