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

  test('multiply one and two correctly', async () => {
    // ARRANGE
    render(<Calculator />);
    const one = await screen.findByTestId('btn-1');
    const multiply = await screen.findByTestId('btn-x');
    const two = await screen.findByTestId('btn-2');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(one);
    });

    await act(async () => {
      await userEvent.click(multiply);
    });

    await act(async () => {
      await userEvent.click(two);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('2');
  });

  test('subtract one from two correctly', async () => {
    // ARRANGE
    render(<Calculator />);
    const one = await screen.findByTestId('btn-1');
    const subtract = await screen.findByTestId('btn--');
    const two = await screen.findByTestId('btn-2');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(two);
    });

    await act(async () => {
      await userEvent.click(subtract);
    });

    await act(async () => {
      await userEvent.click(one);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('1');
  });

  test('divide nine by three correctly', async () => {
    // ARRANGE
    render(<Calculator />);
    const nine = await screen.findByTestId('btn-9');
    const divide = await screen.findByTestId('btn-÷');
    const three = await screen.findByTestId('btn-3');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(divide);
    });

    await act(async () => {
      await userEvent.click(three);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('3');
  });

  test('operatins involving decimal point work as expected', async () => {
    // ARRANGE
    render(<Calculator />);
    const nine = await screen.findByTestId('btn-9');
    const divide = await screen.findByTestId('btn-÷');
    const zero = await screen.findByTestId('btn-0');
    const point = await screen.findByTestId('btn-.');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(divide);
    });

    await act(async () => {
      await userEvent.click(zero);
    });

    await act(async () => {
      await userEvent.click(point);
    });

    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('10');
  });

  test('modulo operator works as expected', async () => {
    // ARRANGE
    render(<Calculator />);
    const nine = await screen.findByTestId('btn-9');
    const modulo = await screen.findByTestId('btn-%');
    const two = await screen.findByTestId('btn-2');
    const equals = await screen.findByTestId('btn-=');

    // ACT
    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(modulo);
    });

    await act(async () => {
      await userEvent.click(two);
    });

    await act(async () => {
      await userEvent.click(equals);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('1');
  });

  test('negative operator works as expected', async () => {
    // ARRANGE
    render(<Calculator />);
    const nine = await screen.findByTestId('btn-9');
    const negative = await screen.findByTestId('btn-+/-');

    // ACT
    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(negative);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('-9');
  });

  test('AC button resets result to 0', async () => {
    // ARRANGE
    render(<Calculator />);
    const nine = await screen.findByTestId('btn-9');
    const plus = await screen.findByTestId('btn-+');
    const three = await screen.findByTestId('btn-3');
    const AC = await screen.findByTestId('btn-AC');

    // ACT
    await act(async () => {
      await userEvent.click(nine);
    });

    await act(async () => {
      await userEvent.click(plus);
    });

    await act(async () => {
      await userEvent.click(three);
    });

    await act(async () => {
      await userEvent.click(AC);
    });

    // ASSERT
    const calculationResult = await screen.findByTestId('calculation-result');
    expect(calculationResult).toHaveTextContent('0');
  });
});
