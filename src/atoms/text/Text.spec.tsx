import React from "react";
import { render } from "@testing-library/react-native";

import Text from "./text";

describe("Text Component", () => {
  it("should render component correctly", () => {
    const container = render(
      <Text type="text" size="large">
        Teste
      </Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("fontWeight attribute should return 400", () => {
    const { getByText } = render(
      <Text type="text" size="large">
        Teste
      </Text>
    );
    const textComponent = getByText("Teste");
    const style = textComponent.props.style;

    expect(style).toHaveProperty("fontWeight", "400");
  });
});
