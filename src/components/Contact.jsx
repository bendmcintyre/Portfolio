import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Contact.module.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneSquareAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_API_KEY
    )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setTimeout(() => {
          formRef.current.reset();
          setIsSubmitted(false);
        }, 1250);
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  return (
    <div className={`${styles.container} ${isLoaded ? styles.visible : ''} ${isSubmitted ? styles.faded : ''}`}>
      <form ref={formRef} onSubmit={handleSubmit} className={isSubmitted ? styles.hidden : ''}>
        <div className={styles['form-item']}>
          <label htmlFor="name" className={styles['form-label']}>Name:</label>
          <br />
          <input className={styles['form-text']} type="text" id="name" name="name" required maxLength="40" pattern="[A-Za-z ]+" />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="email" className={styles['form-label']}>Email:</label>
          <br />
          <input className={styles['form-text']} type="email" id="email" name="email" required />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="subject" className={styles['form-label']}>Subject:</label>
          <br />
          <input className={styles['form-text']} type="text" id="subject" name="subject" required maxLength="50" />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="message" className={styles['form-label']}>Message:</label>
          <br />
          <textarea className={`${styles['form-text']} ${styles['message-input-box']}`} id="message" name="message" required maxLength="500"></textarea>
        </div>
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
      <div className={styles['contact-info']}>
        <a href="tel:+13306065612" className={styles['contact-link']}><FaPhoneSquareAlt className={styles['contact-icon']} /> (330) 606-5612</a>
        <a href="mailto:bendmcintyre@gmail.com" className={styles['contact-link']}><FaEnvelope className={styles['contact-icon']} /> bendmcintyre@gmail.com</a>
        <a href="https://www.linkedin.com/in/ben-mcintyre-profile/" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}><FaLinkedin className={styles['contact-icon']} /> LinkedIn</a>
        <a href="https://github.com/bendmcintyre?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}><FaGithub className={styles['contact-icon']} /> GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
