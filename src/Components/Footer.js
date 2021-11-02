import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <center>
        <img className="logofooter" width="130" src="https://media.discordapp.net/attachments/852547785244803112/900226601659301898/redondo-emPNG.png" />
      </center>
      <p>© Criado por Mariane B. Caldeira, 2021.</p>
    </footer>
  );
};

export default Footer;
