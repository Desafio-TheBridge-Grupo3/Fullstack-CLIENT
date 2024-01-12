import React from "react";
import { shallow } from "enzyme";
import FormChartComponent from "./FormChartComponent";

describe("FormChartComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormChartComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
