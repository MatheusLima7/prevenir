import { fireEvent, render } from "@testing-library/react-native";

import Step from "./step";
import checkboxConstants from "@src/atoms/input/checkbox/checkbox.constants";

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

jest.mock("@src/features/form/selectors", () => ({
  useFormQuestionnaire: () => ({
    id: "",
    typeQuestionnaire: "",
    questions: [],
  }),

  useStepsQuestionnaire: () => [
    {
      currentStep: true,
      questions: [
        {
          id: "246324632462346",
          orderView: 1,
          title: "First question",
          answers: [
            {
              answerId: "1",
              title: "Minha resposta",
              content: "",
              orderView: 1,
            },
            {
              answerId: "4",
              title: "Outro",
              content: "",
              orderView: 99,
            },
          ],
        },
      ],
    },
  ],
}));

jest.mock("@src/store/hooks", () => {
  return {
    useAppDispatch: () => jest.fn(),
  };
});

describe("Step Screen Component", () => {
  it("should render component correctly", () => {
    const container = render(<Step />);

    expect(container).toMatchSnapshot();
  });

  it("should render selected radio component when to click in checkbox ", () => {
    const { getByText, getByTestId } = render(<Step />);
    const option = getByText("Minha resposta");

    fireEvent.press(option);
    const { selectedTestID } = checkboxConstants;
    const selectedStatusAfterAction = getByTestId(selectedTestID);
    expect(selectedStatusAfterAction).toBeDefined();
  });
});
