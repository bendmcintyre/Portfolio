import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import styles from '../styles/Home.module.scss';
import classes from '../styles/Home.module.scss';
import circle from '../images/Circle.png';


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [laTime, setLaTime] = useState('');
  const [nyTime, setNyTime] = useState('');
  const [londonTime, setLondonTime] = useState('');
  const [tokyoTime, setTokyoTime] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const la = moment().tz('America/Los_Angeles').format('h:mm A');
      const ny = moment().tz('America/New_York').format('h:mm A');
      const london = moment().tz('Europe/London').format('h:mm A');
      const tokyo = moment().tz('Asia/Tokyo').format('h:mm A');
      setLaTime(la);
      setNyTime(ny);
      setLondonTime(london);
      setTokyoTime(tokyo);
    }, 1000);
  }, []);

  return (
    <div
      className={`${styles['container']} ${
        isLoaded ? styles.visible : ''
      }`}
    >
      <div className={`${styles.container} ${isLoaded ? styles.visible : ''}`}>
      <div className={styles.content}>
        <div className={styles['box-container']}>
        <div className={styles.box}>
          <h1>Hi, I'm Ben</h1>
        </div>
        </div>
        <div className={styles.boxTime}>
          <div className={styles['clock-widget__timezone']}>
              <h2 className={classes.homeHeaders}>London</h2>
              <p className={classes.timeAndPrice}>{londonTime}</p>
            </div>
            <div className={styles['clock-widget__timezone']}>
              <h2 className={classes.homeHeaders}>Tokyo</h2>
              <p className={classes.timeAndPrice}>{tokyoTime}</p>
            </div>
            <div className={styles['clock-widget__timezone']}>
              <h2 className={classes.homeHeaders}>Los Angeles</h2>
              <p className={classes.timeAndPrice}>{laTime}</p>
            </div>
            <div className={styles['clock-widget__timezone']}>
              <h2 className={classes.homeHeaders}>New York</h2>
              <p className={classes.timeAndPriceText}>{nyTime}</p>
            </div>
        </div>
        <div className={`${styles.boxTime} ${styles.boxLogo}`}>
          <img src={circle} alt="Cricle" className={classes['rotating-image']} />
        </div>
      </div>
    </div>
      <div className={`${styles.boxBottom}`}>
          <h2 className={classes.boxBottomText}>Welcome</h2>
      </div>
    </div>
  );
};

export default Home;
