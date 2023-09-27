import React, { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.scss';
import classes from '../styles/Projects.module.scss';
import toolImg from '../images/tool-img.png';
import UBSCXRImg from '../images/UBSCXR.png';
import ticTacToeImg from '../images/tic-tac-toe.avif';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles['container']} ${isLoaded ? styles.visible : ''}`}>
    <div className={styles.projectsWrapper}>

      <div className={classes['project-2']}>   
        <div className={classes['projects-container']}>  
          <div className={classes['project-box']}>
            <a href="https://ubscxr.com/" target="_blank" rel="noopener noreferrer">
              <div className={classes['project-image']}>
                <img src={UBSCXRImg} alt="UBSCXR" className={classes['ubscxr-img']} />
                <p className={classes['project-box-click-me']}>Click Me</p>
              </div>
            </a>
          </div>
        </div>
        <div className={classes['projects-container-description']}>  
          <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
            <div className={classes['project-text-description']}>
              <h3>UBSCXR</h3>
              <p className={classes['projects-p-tag']}>React</p>
              <p className={classes['projects-p-tag']}>Sass</p>
              <p className={classes['projects-p-tag']}>Javascript</p>
              <p className={classes['projects-p-tag']}>Shopify & Pritify API's</p>
              <p className={classes['projects-p-tag']}>EmailJS</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>  

      <div className={classes['project-1']}>
        <div className={classes['projects-container']}>
          <div className={classes['project-box']}>
            <a href="https://bendmcintyre.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
              <div className={classes['project-image']}>
                <img src={ticTacToeImg} alt="TicTacToe" className={classes['tic-tac-toe']} />
                <p className={classes['project-box-click-me']}>Click Me</p>
              </div>
            </a>
          </div>
        </div>
        <div className={classes['projects-container-description']}>
          <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
            <div className={classes['project-text-description']}>
              <h3>Tic-Tac-Toe</h3>
              <p className={classes['projects-p-tag']}>HTML</p>
              <p className={classes['projects-p-tag']}>CSS</p>
              <p className={classes['projects-p-tag']}>Javascript</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes['project-3']}>
        <div className={classes['projects-container']}>  
          <div className={classes['project-box']}>
            <a href="https://github.com/bendmcintyre/safety_sight_client" target="_blank" rel="noopener noreferrer">
              <div className={classes['project-image']}>
                <img src={toolImg} alt="Tool" className={classes['tool-img']} />
                <p className={classes['project-box-click-me']}>Click Me</p>
              </div>
            </a>
          </div>
        </div>  
        <div className={classes['projects-container-description']}>  
          <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
            <div className={classes['project-text-description']}>
              <h3>Safety Sight (WIP)</h3>
              <p className={classes['projects-p-tag']}>React</p>
              <p className={classes['projects-p-tag']}>CSS</p>
              <p className={classes['projects-p-tag']}>Javascript</p>
              <p className={classes['projects-p-tag']}>Tailwind</p>
              <p className={classes['projects-p-tag']}>SQL</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

    </div>  
    </div>
  );
};

export default Projects;
