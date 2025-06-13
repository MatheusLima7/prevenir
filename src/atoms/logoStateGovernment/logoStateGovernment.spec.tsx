import { render } from "@testing-library/react-native";

import LogoStateGovernment from "./logoStateGovernment";

describe("LogoStateGovernment Component", () => {
  it("should render component correctly", () => {
    const container = render(<LogoStateGovernment />);

    expect(container).toMatchSnapshot();
  });
});
