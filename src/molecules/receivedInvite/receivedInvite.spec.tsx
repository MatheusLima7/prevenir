import React from "react";
import { render } from "@testing-library/react-native";

import ReceivedInvite from "./receivedInvite";

describe("ReceivedInvite Component", () => {
  it("should render component correctly", () => {
    const container = render(
      <ReceivedInvite title={"title"} subtitle={"subtitle"} />
    );

    expect(container).toMatchSnapshot();
  });
});
