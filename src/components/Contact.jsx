import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Contact.module.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneSquareAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();
  const [resetForm, setResetForm] = useState(false); // Add this line

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsLoaded(false);
        setShowSuccess(true);
      }, 1000);
      setTimeout(() => {
        setIsLoaded(true);
        setShowSuccess(false);
        setIsSubmitted(false);
        setResetForm(true);
      }, 2000);
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (resetForm) {
      formRef.current.reset();
      setResetForm(false);
    }
  }, [resetForm]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  try {
    const response = await axios.post('https://damp-oasis-63336.herokuapp.com/submit-form', data);
    console.log(response.data);
    setIsSubmitted(true);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className={`${styles.container} ${isLoaded && !isSubmitted ? styles.visible : ''} ${isSubmitted ? styles.hidden : ''}`}>
      <form ref={formRef} onSubmit={handleSubmit} className={!isSubmitted ? styles.fadeInOut : ''}>
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
      {showSuccess && (
        <p
          className={`${styles['success-message']} ${!isLoaded && isSubmitted ? styles.visible : ''} ${isSubmitted ? styles.fadeInOut : ''}`}
        >
          Form submission successful!
        </p>
      )}
      <div className={styles['contact-info']}>
        <a href="tel:+13306065612" className={styles['contact-link']}>
          <FaPhoneSquareAlt className={styles['contact-icon']} />
                  (330) 606-5612
        </a>
        <a href="mailto:bendmcintyre@gmail.com" className={styles['contact-link']}>
          <FaEnvelope className={styles['contact-icon']} />
          bendmcintyre@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ben-mcintyre-profile/" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaLinkedin className={styles['contact-icon']} />
          LinkedIn
        </a>
        <a href="https://github.com/bendmcintyre?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaGithub className={styles['contact-icon']} />
          GitHub
        </a>
      </div>
      {resetForm && setTimeout(() => { setResetForm(false); }, 50)}
    </div>
  );
};

export default Contact;



