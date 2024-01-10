import React from "react";
import { shallow } from "enzyme";
import Cosa from "./Cosa";

describe("Cosa", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cosa />);
    expect(wrapper).toMatchSnapshot();
  });
});
