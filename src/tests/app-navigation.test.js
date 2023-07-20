import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('navigation links', () => {
  test('clicking on Home link loads the home page', async () => {
    // ARRANGE
    render(<App />, { wrapper: BrowserRouter });

    // ACT
    await act(() => userEvent.click(screen.getByTestId('navlink-home')));

    // verify page content for expected route after navigating
    expect(screen.getByTestId('homepage-content')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to our page/i)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();
  });

  test('clicking on Calculator link loads the calculator', async () => {
    // ARRANGE
    render(<App />, { wrapper: BrowserRouter });

    // ACT
    await act(() => userEvent.click(screen.getByTestId('navlink-calculator')));

    // verify page content for expected route after navigating
    expect(screen.getByTestId('calculator-content')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getByText('÷')).toBeInTheDocument();
  });

  // TODO: Test Quote page. Challenges:
  // 1. We have to wait for the quote to load
  // 2. The quote that loads is different every time
});
