import React from "react";
import { shallow } from "enzyme";
import Vacio from "./Vacio";

describe("Vacio", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vacio />);
    expect(wrapper).toMatchSnapshot();
  });
});
