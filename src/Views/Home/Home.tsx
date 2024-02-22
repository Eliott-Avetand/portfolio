import Separator from '../../Components/separator/separator';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>ACCUEIL</h1>
            <div className={styles.content}>
                <Separator />
                <p>Salut ! Je m'appelle Eliott Avetand, je suis un développeur créatif passioné par le design.J'interviens en tant que développeur web full stack mais j'ai quelques années d'expériences dans une multitude de language comme le C / C++, Python, Unreal, etc, qui me permettent de travailler dans tous les domaines, je m'adapte !</p>
            </div>
        </div>
    );
}

export default Home;
