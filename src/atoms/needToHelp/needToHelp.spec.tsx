import React from "react";
import { render } from "@testing-library/react-native";

import NeedToHelp from "./needToHelp";

describe("NeedToHelp Component", () => {
  it("should render component correctly", () => {
    const container = render(
      <NeedToHelp title={"need_to_help"} subtitle={"press_here"} />
    );

    expect(container).toMatchSnapshot();
  });
});
