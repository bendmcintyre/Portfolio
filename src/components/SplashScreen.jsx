import React, { useRef, useEffect } from 'react';
import classes from '../styles/SplashScreen.module.scss';

const SplashScreen = ({ onFinish }) => {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const logoSpansRef = useRef([]);
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
          if (introRef.current) {
            introRef.current.classList.add(classes['fade-out']);
          }
          if (logoRef.current) {
            logoRef.current.classList.add(classes.fade);
          }
        }, 3000);

        // Call the onFinish function after the animation is complete
        setTimeout(() => {
          onFinish();
        }, 3500);

        isLoaded.current = true;
      });
    }
  }, [onFinish]);

  return (
    <div className={classes.loading}>
      <div className={classes['loading-container']}>
        <h1 className={classes['logo-header']} ref={logoRef}>
          <span
            className={classes.logo}
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
    </div>
  );
};

export default SplashScreen;

