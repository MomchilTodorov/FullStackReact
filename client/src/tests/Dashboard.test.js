import React from "react";
import { shallow, configure } from "enzyme";
import Dashboard from "../components/Dashboard";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Dashbaord", () => {
  it("should render Dashboard", () => {
    const component = shallow(<Dashboard />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
