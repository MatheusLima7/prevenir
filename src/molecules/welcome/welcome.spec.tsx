import React from "react";
import { render } from "@testing-library/react-native";

import Welcome from "./welcome";

describe("Welcome Component", () => {
  it("should render component correctly", () => {
    const container = render(
      <Welcome title={"title"} text={"text"} org="org" />
    );

    expect(container).toMatchSnapshot();
  });
});
