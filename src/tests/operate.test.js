import operate from '../logic/operate';

describe('The operation', () => {
  test('renders correct value', () => {
    const returnValue = operate(4, 2, '+');
    expect(returnValue).toBe('6');
  });

  test('renders correct value', () => {
    const returnValue = operate(4, 2, '-');
    expect(returnValue).toBe('2');
  });

  test('renders correct value', () => {
    const returnValue = operate(4, 2, 'x');
    expect(returnValue).toBe('8');
  });

  test('renders correct value', () => {
    const returnValue = operate(4, 2, '÷');
    expect(returnValue).toBe('2');
  });

  test('renders correct value', () => {
    const returnValue = operate(4, 0, '÷');
    expect(returnValue).toBe('Can\'t divide by 0.');
  });

  test('renders correct value', () => {
    const returnValue = operate(9, 7, '%');
    expect(returnValue).toBe('2');
  });

  test('renders correct value', () => {
    const returnValue = operate(9, 0, '%');
    expect(returnValue).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
