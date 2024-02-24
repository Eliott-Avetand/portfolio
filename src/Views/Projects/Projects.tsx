import { useEffect, useState } from 'react';
import Button from '../../Components/Button/Button';
import Separator from '../../Components/Separator/separator';
import styles from './Projects.module.scss';
import Footer from '../../Components/Footer/Footer';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';

const Projects = () => {
    const projectsDescription = "Tous mes projets étudiants et professionnels importants réalisés.";
    const [footerText, setFooterText] = useState<string>(projectsDescription)

    const onClickButton = (btnName: string) => {
        const zone = document.querySelector(`#${btnName}`);

        zone.style.display = "flex"
    }

    useEffect(() => {
        if (footerText === "")
            setFooterText(projectsDescription);
    }, [footerText, setFooterText]);
    

    return (
        <div className={styles.projects}>
            <h1>PROJECTS</h1><i></i>
            <div className={styles.content}>
                <div className={styles.zone1}>
                    <Separator />
                    <div className={styles.menu}>
                        <Button
                            btnName='Game'
                            btnDescription='Tous mes projets dans le développement de jeux vidéo.'
                            setFooterText={setFooterText}
                            onClickEvent={onClickButton}
                        />
                        <Button btnName='Web' btnDescription="Tous mes projets de création de site internet." setFooterText={setFooterText} />
                        <Button btnName='C / C++' btnDescription='Mes projets annexes, algorithmes, programmes en C / C++.' setFooterText={setFooterText} />
                    </div>
                </div>
                <div className={styles.zone2} id="Game">
                    <Separator />
                    <div className={styles.menu}>
                        <Button btnName='MyRPG' btnDescription="Création d'un jeu RPG en C avec la librairie graphique CSFML." setFooterText={setFooterText} />
                        <Button btnName='IndieStudio' btnDescription="Création d'un bomberman dans le monde de pikmin en C++ avec la librairie graphique Raylib." setFooterText={setFooterText} />
                        <Button btnName='RType' btnDescription="Création du jeu éponyme en C++ avec la librairie graphique SFML." setFooterText={setFooterText} />
                        <Button btnName='RainbowRumble' btnDescription="Création d'un jeu doom-like avec Unity." setFooterText={setFooterText} />
                        <Button btnName='Sense' btnDescription="Création d'un jeu RPG basé sur les 5 sens humain avec Unreal Engine 5." setFooterText={setFooterText} />
                    </div>
                </div>
                <div className={styles.zone2} id="Web">
                    <Separator />
                    <div className={styles.menu}>
                        <Button btnName='AREA' btnDescription="Recréation d'une application web type Zapier ou IFTTT en ReactJS / NodeJS." setFooterText={setFooterText} />
                        <Button btnName='Portfolio' btnDescription="Le site que vous visitez." setFooterText={setFooterText} />
                    </div>
                </div>
                <div className={styles.zone2} id="C / C++">
                    <Separator />
                    <div className={styles.menu}>
                        <Button btnName='MyTeams' btnDescription="Recréation du fonctionnement de Microsoft Teams en C." setFooterText={setFooterText} />
                        <Button btnName='MyFTP' btnDescription="Recréation d'un File Transfer Protocol en C." setFooterText={setFooterText} />
                        <Button btnName='Shell' btnDescription="Création d'un terminal en C." setFooterText={setFooterText} />
                        <Button btnName='Arcade' btnDescription="Création de 3 jeu dans 3 librairies graphiques avec la possibilité de tout changer au run-time." setFooterText={setFooterText} />
                    </div>
                </div>
                <MainInfo />
            </div>
            <Footer text={footerText} keys={["Echap", "Entrée"]} />
        </div>
    );
}

export default Projects;
