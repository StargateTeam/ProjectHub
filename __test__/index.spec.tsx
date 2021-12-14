import Button from "../src/components/Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("render", () => {
  const wrapper = shallow(<Button size="lg" />);
  const { style } = wrapper.get(0).props;

  it("size가 lg일 경우 width는 240px 이어야함", () => {
    expect(style.width).toBe("240px");
  });
});
