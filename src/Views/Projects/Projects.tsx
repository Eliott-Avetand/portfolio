import Button from '../../Components/Button/Button';
import styles from './Projects.module.scss';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { pageProps } from '../../Interfaces/PagesProps.interface';
import { useLanguage } from '../../Contexts/useContext';

interface projectsProps extends pageProps {}

const Projects = ({ setFooterText }: projectsProps) => {
    const { dictionary } = useLanguage();
    // const onClickButton = (btnName: string) => {
    //     const zone = document.querySelector(`#${btnName}`);

    //     zone.style.display = "flex"
    // }

    return (
        <div className={styles.projects}>
            <div className={styles.menu}>
                <Button
                    btnName={dictionary["projects"].buttons[0].title}
                    btnDescription={dictionary["projects"].buttons[0].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
                <Button
                    btnName={dictionary["projects"].buttons[1].title}
                    btnDescription={dictionary["projects"].buttons[1].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
                <Button
                    btnName={dictionary["projects"].buttons[2].title}
                    btnDescription={dictionary["projects"].buttons[2].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
            </div>
            {/* <div className={styles.zone2} id="Game">
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
            </div> */}
            <MainInfo />
        </div>
    );
}

export default Projects;
