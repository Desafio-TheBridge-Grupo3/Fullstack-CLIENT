import React from "react";
import { shallow } from "enzyme";
import GraficoTabla from "./GraficoTabla";

describe("GraficoTabla", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GraficoTabla />);
    expect(wrapper).toMatchSnapshot();
  });
});
