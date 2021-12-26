import Answer, { Props } from '../src/components/Answer';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';

Enzyme.configure({ adapter: new Adapter() });

const answerList = [
  { id: '0', text: '문제1' },
  { id: '1', text: '문제2' },
  { id: '2', text: '문제3' },
  { id: '3', text: '문제4' },
  { id: '4', text: '문제5' },
];
const AnswerProps: Props = {
  answerList: answerList,
  maxCount: 2,
  fontSize: 'small',
};
describe('<Answer />', () => {
  const wrapper = mount(<Answer {...AnswerProps} />);
  const Labelstyle = wrapper.find('label').get(0).props;
  // const style = wrapper.getElement().props.children[0].props.children[1].style;
  // console.log(style);

  //Q. 20px을 어떻게 가져와야하는지 모르겠,,,
  it('fontSize가 small일 경우 Label font-size는 20px 이어야함', () => {
    expect(Labelstyle.fontSize).toBe('small');
  });
});
