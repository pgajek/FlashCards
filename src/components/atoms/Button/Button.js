import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, click }) => (
  <button onClick={click} className={styles.button}>
    {children}
  </button>
);

export default Button;
