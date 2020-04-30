import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Auth from './Auth';

const renderView = (props) => {
  const utils = render(<Auth {...props} />);
  const auth = utils.getByTestId('auth');
  return { ...utils, auth };
};

describe('Auth view', () => {
  it('Renders without crashing', () => {
    const { getByTestId } = renderView();
    expect(getByTestId('auth')).toBeInTheDocument();
  });
  it('Renders two inputs', () => {
    const { getAllByTestId } = renderView();
    expect(getAllByTestId('input')).toHaveLength(2);
  });
  it('Renders four inputs after click on registration button', () => {
    const { getByTestId, getAllByTestId } = renderView();
    fireEvent.click(getByTestId('registrationButton'));
    expect(getAllByTestId('input')).toHaveLength(4);
  });
  it('Fires submit function after clickin on submit button', () => {
    const { getByTestId } = renderView();
    const button = getByTestId('submitButton');
    const onSubmit = jest.fn();
    const form = getByTestId('authForm');
  });
  it('Changing route after loging in', () => {});
});
