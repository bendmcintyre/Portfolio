import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.scss';

const Home = () => {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const logoSpansRef = useRef([]);
  const navbarRef = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      setTimeout(() => {
        logoSpansRef.current.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.add(classes.active);
          }, (idx + 1) * 400);
        });

        setTimeout(() => {
          logoSpansRef.current.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove(classes.active);
              span.classList.add(classes.fade);
            });
          });
        }, 2500);

        setTimeout(() => {
          introRef.current.classList.add(classes['fade-out']);
          navbarRef.current.style.opacity = '1';
          navbarRef.current.style.pointerEvents = 'auto';
          logoRef.current.classList.add(classes.fade);
        }, 3000);

        isLoaded.current = true;
      });
    }
  }, []);

  return (
    <>
      <div className={classes.intro} ref={introRef}>
        <h1 className={classes.logoHeader} ref={logoRef}>
          <span
            className={`${classes.logo} ${classes.loading}`}
            ref={(el) => logoSpansRef.current.push(el)}
          >
            Loading
          </span>
          <span
            className={classes.logo}
            ref={(el) => logoSpansRef.current.push(el)}
          >
            .
          </span>
          <span
            className={classes.logo}
            ref={(el) => logoSpansRef.current.push(el)}
          >
            .
          </span>
          <span
            className={classes.logo}
            ref={(el) => logoSpansRef.current.push(el)}
          >
            .
          </span>
        </h1>
      </div>
      <nav className={classes.nav} ref={navbarRef}>
        <div className={classes.navContainer}>
          <Link to="/" className={classes.navLink}>
            <button className={classes.navButton}>
              <p>Home</p>
            </button>
          </Link>
          <Link to="/about" className={classes.navLink}>
            <button className={classes.navButton}>
              <p>About</p>
            </button>
          </Link>
          {/* Add other nav links as necessary */}
        </div>
      </nav>
    </>
  );
};

export default Home;
