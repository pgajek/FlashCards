import React from 'react';
import styles from './Headers.module.scss';

const Header = ({ children }) => <h1 className={styles.header}>{children}</h1>;

export default Header;
