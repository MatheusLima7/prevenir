import { render } from "@testing-library/react-native";

import Logo from "./logo";

describe("Logo Component", () => {
  it("should render component correctly", () => {
    const container = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
