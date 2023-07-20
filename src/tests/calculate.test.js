import calculate from '../logic/calculate';

// Helper function to help make each test concise
const helper = (calculate, arrayOfInputs) => {
  /**
   * This function takes a string input and passes each character
   * one by one to the calculate() function. It then returns the
   * final object returned by calculate().
   */
  let state = {};
  arrayOfInputs.forEach((input) => {
    state = calculate(state, input);
  });
  return state;
};

describe('The calculate function', () => {
  test('inputing numbers repeatedly works as expected', () => {
    // Arrange
    const inputButtonNames = ['1', '2', '3'];
    const expectedState = { next: '123', total: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('addition works on two operands', () => {
    // Arrange
    const inputButtonNames = ['2', '+', '3', '='];
    const expectedState = { total: '5', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('can add more than two operands', () => {
    // Arrange
    const inputButtonNames = ['3', '+', '4', '+', '5', '='];
    const expectedState = { total: '12', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('can subtract more than two operands', () => {
    // Arrange
    const inputButtonNames = ['6', '-', '4', '-', '2', '='];
    const expectedState = { total: '0', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('can divide more than two operands', () => {
    // Arrange
    const inputButtonNames = ['8', '÷', '2', '÷', '2', '='];
    const expectedState = { total: '2', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('division by 0 returns expected error', () => {
    // Arrange
    const inputButtonNames = ['4', '÷', '0', '='];
    const expectedState = { total: "Can't divide by 0.", next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('can multiply more than two operands', () => {
    // Arrange
    const inputButtonNames = ['2', 'x', '4', 'x', '3', '='];
    const expectedState = { total: '24', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('multiply by 1 returns operand', () => {
    // Arrange
    const inputButtonNames = ['4', 'x', '1', '='];
    const expectedState = { total: '4', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('multiply by 0 returns 0', () => {
    // Arrange
    const inputButtonNames = ['6', 'x', '0', '='];
    const expectedState = { total: '0', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('negative operator (+/-) works as expected', () => {
    // Arrange
    const inputButtonNames = ['9', '+/-'];
    const expectedState = { next: '-9', total: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('decimal point works with all operators', () => {
    // Arrange
    const inputButtonNames = ['.', '5', '+', '.', '2', '5', '-', '.', '1', '5', '÷', '0', '.', '2', '='];
    const expectedState = { total: '3', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('modulo operator works with positive operands', () => {
    // Arrange
    const inputButtonNames = ['8', '%', '3', '='];
    const expectedState = { total: '2', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test('modulo operator works with negative operand', () => {
    // Arrange
    const inputButtonNames = ['8', '%', '2', '+/-', '='];
    const expectedState = { total: '0', next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });

  test("passing 'AC' clears the state", () => {
    // Arrange
    const inputButtonNames = ['1', '2', '+', '3', 'AC'];
    const expectedState = { total: null, next: null, operation: null };
    // Act
    const returnedState = helper(calculate, inputButtonNames);
    // Assert
    expect(returnedState).toEqual(expectedState);
  });
});
