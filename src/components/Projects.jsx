import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
      <div
        className={`${styles['container']} ${
          isLoaded ? styles.visible : ''
        }`}
      >
        <h1 className={styles['header']}>
          Projects
        </h1>
      </div>
  );
};

export default Projects;