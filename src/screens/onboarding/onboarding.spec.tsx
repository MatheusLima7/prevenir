import { render } from "@testing-library/react-native";

import OnBoardingScreen from "./onboarding";
import { EMOTIONAL_SUPPORT } from "@src/atoms/onboarding/emotionalSupport/general.constants";

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

jest.mock("@src/features/app/selectors", () => ({
  useAppTypeUserLoggedAuth: jest
    .fn()
    .mockReturnValueOnce("supporter")
    .mockReturnValueOnce("user"),
}));

describe("OnBoarding Screen Component", () => {
  it("should render component correctly", () => {
    const container = render(<OnBoardingScreen />);

    expect(container).toMatchSnapshot();
  });

  it("should render emotional supporter component for user", () => {
    const { getByTestId } = render(<OnBoardingScreen />);

    expect(getByTestId(EMOTIONAL_SUPPORT)).toBeDefined();
  });
});
