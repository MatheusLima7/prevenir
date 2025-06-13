import { render } from "@testing-library/react-native";

import Form from "./formData";

jest.mock("react-native-linear-gradient", () => jest.fn());

jest.mock("@react-native-vector-icons/FontAwesome6", () => {
  return (props: any) => `MockedIcon(${JSON.stringify(props)})`;
});

jest.mock("@react-native-vector-icons/evil-icons", () => {
  return (props: any) => `MockedIcon(${JSON.stringify(props)})`;
});

jest.mock("react-native-snap-carousel", () => {
  return {
    __esModule: true,
    default: ({ data, renderItem }: any) => {
      return data.map((item: any, index: number) =>
        renderItem({ item, index })
      );
    },
    Pagination: () => null,
  };
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

jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

describe("Form Screen Component", () => {
  it("should render component correctly", () => {
    const container = render(<Form />);

    expect(container).toMatchSnapshot();
  });
});
