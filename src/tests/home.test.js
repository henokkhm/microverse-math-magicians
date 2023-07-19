import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('The homepage renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
