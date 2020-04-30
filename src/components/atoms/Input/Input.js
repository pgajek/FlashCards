import React from 'react';
import styles from './Input.module.scss';

const Input = ({ name, type, regex, required, value, change }) => {
  return (
    <>
      <label htmlFor={name} className={styles.label} />
      <input
        type={type}
        name={name}
        id={name}
        className={styles.input}
        placeholder={name}
        pattern={regex}
        required={required}
        value={value}
        onChange={change}
      />
    </>
  );
};

export default Input;
