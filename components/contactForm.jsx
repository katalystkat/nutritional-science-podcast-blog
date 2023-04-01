import React from 'react';
import styles from '../styles/contact.module.css';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your email sending logic here
    console.log('Email sent');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} type="email" id="email" required />
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea className={styles.textarea} id="message" rows="5" required></textarea>
        <button className={styles.button} type="submit">Send</button>
      </form>

      <div className={styles.socialLinks}>
        <a className={styles.socialLink} href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a className={styles.socialLink} href="https://www.youtube.com/channel/yourchannelID" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a className={styles.socialLink} href="https://www.twitch.tv/yourusername" target="_blank" rel="noopener noreferrer">
          Twitch
        </a>
        <a className={styles.socialLink} href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
