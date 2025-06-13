import { render } from "@testing-library/react-native";

import Login from "./login";

jest.mock("react-native-linear-gradient", () => jest.fn());

jest.mock("@react-native-vector-icons/FontAwesome6", () => {
  return (props: any) => `MockedIcon(${JSON.stringify(props)})`;
});

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Login Screen Component", () => {
  it("should render component correctly", () => {
    const container = render(<Login />);

    expect(container).toMatchSnapshot();
  });
});
