import React, { useState } from 'react';
import useSignUpForm from 'helpers/CustomHooks.js';
import styles from './Auth.module.scss';
import Input from 'components/atoms/Input/Input.js';
import Header from 'components/atoms/Header/Header';
import Button from 'components/atoms/Button/Button';

const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [registration, setRegistration] = useState(false);

  const signup = () => {
    alert(`User Created!
    Login: ${inputs.Login}
    password: ${inputs.Password}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <main className={styles.wrapper} data-testid="auth">
      <section className="authWrapper">
        <Header>LOGO TEXT</Header>
        <form data-testid="authForm" className={styles.form} onSubmit={handleSubmit}>
          <Input
            name="Login"
            type="text"
            value={inputs.Login}
            change={handleInputChange}
            required
          />
          <Input
            name="Password"
            type="text"
            value={inputs.Password}
            change={handleInputChange}
            required
          />
          {registration && (
            <>
              <Input
                name="Repeat"
                type="text"
                value={inputs.Repeat}
                change={handleInputChange}
                required
              />
              <Input
                name="email"
                type="text"
                value={inputs.email}
                change={handleInputChange}
                required
              />
            </>
          )}
          <Button data-testid="submitButton">{registration ? 'Register' : 'Log in'}</Button>
        </form>
        {registration ? null : (
          <button
            type="submit"
            className="registration"
            onClick={() => {
              setRegistration(true);
            }}
            data-testid="registrationButton"
          >
            Don't have an account?
          </button>
        )}
      </section>
    </main>
  );
};

export default Auth;
