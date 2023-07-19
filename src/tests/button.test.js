import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('The button', () => {
  it('renders correct value', () => {
    const tree = renderer.create(<Button value="hi" handleClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct value', () => {
    const tree = renderer.create(<Button value="hello" handleClick={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct className when we pass wide props', () => {
    const tree = renderer.create(<Button value="good" handleClick={() => {}} wide />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct className when we pass accent props', () => {
    const tree = renderer.create(<Button value="good" handleClick={() => {}} accent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
