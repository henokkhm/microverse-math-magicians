import renderer from 'react-test-renderer';
import ResultBar from '../components/ResultBar';

describe('The resultBar', () => {
  it("renders 0 if we don't pass a display value", () => {
    const tree = renderer.create(<ResultBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the value passed', () => {
    const tree = renderer.create(<ResultBar displayValue="5" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the value passed', () => {
    const tree = renderer.create(<ResultBar displayValue="9" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
