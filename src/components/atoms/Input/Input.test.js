import React from 'react';
import Input from './Input.js';
import styles from 'Input.module.scss';
import { render, fireEvent } from '@testing-library/react';

const renderInput = (props) => {
  const utils = render(<Input name="Login" {...props} />);
  const input = utils.getByPlaceholderText(/login/i);

  return { ...utils, input };
};

describe('Input component', () => {
  it('renders without crashing', () => {
    const { input } = renderInput();
    expect(input).toBeInTheDocument();
  });
  it('Displays proper value', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'login2' } });
    expect(input).toHaveValue('login2');
  });
});
