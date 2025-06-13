import routes from "@src/stacks/routes";
import selectDateConstants from "./selectDate.constants";
import { useRootNavigation } from "@src/stacks";
import { usePsychoSelectedDate } from "@src/features/psycho/selectors";

export default (disabled: boolean) => {
  const { select_date } = selectDateConstants;
  const { navigate } = useRootNavigation();

  const onPress = () => {
    if (!disabled) {
      navigate(routes.SELECT_DATE);
    }
  };

  function formatISOToBR(dateISO: string) {
    if (!dateISO) return null;
    const [year, month, day] = dateISO.split("-");
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
  }

  const selectedDate = usePsychoSelectedDate();

  return {
    select_date:
      selectedDate !== null ? formatISOToBR(selectedDate) : select_date,
    hasFilledDate: selectedDate !== null && !!formatISOToBR(selectedDate),
    onPress,
  };
};
