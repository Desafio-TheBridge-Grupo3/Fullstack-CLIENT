import React from "react";
import { shallow } from "enzyme";
import SFranja from "./SFranja";

describe("SFranja", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SFranja />);
    expect(wrapper).toMatchSnapshot();
  });
});
