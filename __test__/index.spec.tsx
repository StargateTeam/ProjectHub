import Switch from "../src/components/Switch";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("test", () => {
  const props = {
    check: true,
    onChangeToggle: ()=> { return !props.check; },
    color: "#6d77ff"
  };

  const wrapper = shallow(<Switch {...props}/>);
  const { style } = wrapper.last().get(0).props.children[0].props;

  it("check가 True일 때 색상 값이 props.color과 같을 것", () => {
    expect(style.background).toBe("#6d77ff");
  });
});
