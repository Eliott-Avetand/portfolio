import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import GlitchText from "../GlitchEffect/GlitchEffect";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <GlitchText children="AVETAND&nbsp;Eliott" />
            <div className={styles.menu}>
                <Link className={styles.active} to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
