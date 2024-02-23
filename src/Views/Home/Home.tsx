import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import Button from '../../Components/Button/Button';
import Separator from '../../Components/Separator/separator';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>ACCUEIL</h1>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Separator />
                    <div className={styles.text}>
                        <p>Salut ! Je m'appelle Eliott Avetand, je suis un développeur créatif passioné par le design.J'interviens en tant que développeur web full stack mais j'ai quelques années d'expériences dans une multitude de language comme le C / C++, Python, Unreal, etc, qui me permettent de travailler dans tous les domaines, je m'adapte !</p>
                        <Button text='Informations' />
                        <Button text='Tous les projets' />
                    </div>
                    <div className={styles.test}></div>
                </div>
                <MainInfo />
            </div>
        </div>
    );
}

export default Home;
