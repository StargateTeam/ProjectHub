import { Answer } from '../src/components/Answer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('render', () => {
  const wrapper = shallow(<Answer size="lg" />);
  const { style } = wrapper.get(0).props;

  it('fontSize가 lg일 경우 FontSize는 30px 이어야함', () => {
    expect(style.fontSize).toBe('20px');
  });
});
