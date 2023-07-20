import renderer from 'react-test-renderer';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('The calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('adds one and two correctly', async () => {
    // ARRANGE
    render(<Calculator />);
    const one = await screen.findByTestId('btn-1');
    const plus = await screen.findByTestId('btn-+');
    const two = await screen.findByTestId('btn-2');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(one);
    });

    await act(async () => {
      await userEvent.click(plus);
    });

    await act(async () => {
      await userEvent.click(two);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('3');
  });
});
