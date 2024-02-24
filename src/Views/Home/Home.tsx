import { useEffect, useState } from 'react';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import Button from '../../Components/Button/Button';
import Separator from '../../Components/Separator/separator';
import styles from './Home.module.scss';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    const homeDescription = "Page d'accueil du portfolio.";
    const [footerText, setFooterText] = useState<string>(homeDescription);

    useEffect(() => {
        if (footerText === "")
            setFooterText(homeDescription);
    }, [footerText, setFooterText])
    

    return (
        <div className={styles.home}>
            <h1>ACCUEIL</h1>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Separator />
                    <div className={styles.text}>
                        <p>Salut ! Je m'appelle Eliott Avetand, je suis un développeur créatif passioné par le design.J'interviens en tant que développeur web full stack mais j'ai quelques années d'expériences dans une multitude de language comme le C / C++, Python, Unreal, etc, qui me permettent de travailler dans tous les domaines, je m'adapte !</p>
                        <Button btnName='Informations' btnDescription='Consulte les informations légales du site.' setFooterText={setFooterText} />
                        <Button btnName='Tous les projets' btnDescription='Consulte la liste des projets importants réalisés.' setFooterText={setFooterText} />
                    </div>
                </div>
                <MainInfo />
            </div>
            <Footer text={footerText} keys={["Echap", "Entrée"]} />
        </div>
    );
}

export default Home;
