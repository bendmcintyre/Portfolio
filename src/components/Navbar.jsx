import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !isHidden) {
        setIsHidden(true);
      } else if (scrollPosition === 0 && isHidden) {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHidden]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`${classes.nav} ${isLoaded ? classes.show : ''} ${isHidden ? classes.hide : ''}`}>
      <div className={classes.navContainer}>
        <Link to="/" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Home</p>
          </button>
        </Link>
        <Link to="/about" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>About</p>
          </button>
        </Link>
        <Link to="/skills" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Skills</p>
          </button>
        </Link>
        <Link to="/projects" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Projects</p>
          </button>
        </Link>
        <Link to="/contact" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Contact</p>
          </button>
        </Link>
        <div className={`${classes.menuIcon} ${showMenu ? classes.close : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
      <div className={`${classes.overlay} ${showMenu ? classes.show : ''}`}></div>
      {showMenu && (
        <div className={classes.mobileNav}>
          <div className={classes.mobileNavMenu}>
            <Link to="/" className={classes.mobileNavLink} onClick={toggleMenu}>
              <p className={`${classes.navNameMobile} ${classes.homeNav} ${classes.navNameMobileHome}`}>Home</p>
            </Link>
            <Link to="/about" className={classes.mobileNavLink} onClick={toggleMenu}>
              <p className={classes.navNameMobile}>About</p>
            </Link>
            <Link to="/skills" className={classes.mobileNavLink} onClick={toggleMenu}>
              <p className={classes.navNameMobile}>Skills</p>
            </Link>
            <Link to="/projects" className={classes.mobileNavLink} onClick={toggleMenu}>
              <p className={classes.navNameMobile}>Projects</p>
            </Link>
            <Link to="/contact" className={classes.mobileNavLink} onClick={toggleMenu}>
              <p className={classes.navNameMobile}>Contact</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
