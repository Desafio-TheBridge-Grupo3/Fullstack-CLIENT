import React from "react";
import { shallow } from "enzyme";
import Prueba from "./Prueba";

describe("Prueba", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Prueba />);
    expect(wrapper).toMatchSnapshot();
  });
});
