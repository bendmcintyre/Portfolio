import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>Home</p>
                        </button>
                    </Link>
                    <Link to="/about" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>About</p>
                        </button>
                    </Link>
                    <Link to="/projects" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>Projects</p>
                        </button>
                    </Link>
                    <Link to="/contact" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>Contact</p>
                        </button>
                    </Link>
                </div>
            </nav>
            <div className={styles.aboutContainer}>
                <h1>About Page</h1>
            </div>
        </>
    );
};

export default About;


