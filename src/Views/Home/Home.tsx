import { pageProps } from '../../Interfaces/PagesProps.interface';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import Button from '../../Components/Button/Button';
import styles from './Home.module.scss';
import { useLanguage } from '../../Contexts/useContext';

interface homeProps extends pageProps {}

const Home = ({ setFooterText }: homeProps) => {
    const { dictionary } = useLanguage();

    return (
        <div className={styles.home}>
            <div className={styles.menu}>
                <p>{dictionary["home"].texts[0]}</p>
                <Button
                    btnName={dictionary["home"].buttons[0].title}
                    btnDescription={dictionary["home"].buttons[0].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
                <Button
                    btnName={dictionary["home"].buttons[1].title}
                    btnDescription={dictionary["home"].buttons[1].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
            </div>
            <MainInfo />
        </div>
    );
}

export default Home;
