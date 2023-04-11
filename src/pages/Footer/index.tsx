import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="conteiner">
        <div className={styles.footerText}>2003-2023 Fake Shop</div>
      </div>
    </footer>
  );
};
