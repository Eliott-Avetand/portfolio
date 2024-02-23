import styles from './MainInfo.module.scss';

const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <h6 className={styles.title}>État</h6>
            <div className={styles.section}>
                <div className={styles.line}>
                    <p>Avetand Eliott</p> <p>Niv. : 20</p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.line}>
                    <p>EXP :</p> <p>5 ans</p>
                </div>
                <div className={styles.line}>
                    <p>PV :</p> <p>700 / 1000</p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.line}>
                    <p>ADAPTABILITÉ</p> <p>+1498    20</p>
                </div>
                <div className={styles.line}>
                    <p>INITIATIVE</p> <p>+1501    37</p>
                </div>
                <div className={styles.line}>
                    <p>AUTONOMIE</p> <p>+17757    40</p>
                </div>
            </div>
            <div className={styles.lastSection}>
                <p>Aucune Erreur</p>
            </div>
        </div>
    );
}

export default MainInfo;
