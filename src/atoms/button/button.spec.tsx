import { render } from "@testing-library/react-native";

import Button from "./button";

jest.mock("react-native-linear-gradient", () => {
  const { View } = require("react-native");
  return View;
});

describe("Button Component", () => {
  it("should render component correctly", () => {
    const container = render(
      <Button mode="full" onPress={() => jest.fn()} type="filled" size="small">
        teste
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it("should to render the button with attributes of filled button", () => {
    const { getByText } = render(
      <Button mode="full" onPress={() => jest.fn()} type="filled" size="small">
        teste
      </Button>
    );
    const textComponent = getByText("teste");
    const style = textComponent.props.style;
    const mergedStyle = Object.assign({}, ...style);

    expect(mergedStyle).toHaveProperty("fontFamily", "Quicksand-SemiBold");
    expect(mergedStyle).toHaveProperty("fontSize", 14);
    expect(mergedStyle).toHaveProperty("fontWeight", `600`);
  });
});
