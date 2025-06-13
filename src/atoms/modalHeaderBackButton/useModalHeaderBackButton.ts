/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocaleConfig } from "react-native-calendars";
import { useRootNavigation } from "@src/stacks";
import { useEffect, useState } from "react";
import { setSelectedDate } from "@src/features/psycho/slice";
import { useAppDispatch } from "@src/store/hooks";
import { usePsychoSelectedDate } from "@src/features/psycho/selectors";
import { translationOfDate } from "@src/utils/date";

export default () => {
  const { goBack } = useRootNavigation();
  const dispatch = useAppDispatch();

  const selectedDate = usePsychoSelectedDate();

  LocaleConfig.locales["pt"] = translationOfDate;

  LocaleConfig.defaultLocale = "pt";

  const getCurrentDateUS = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  const [dateSelected, setDateSelected] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  const onDayPress = (d: any) => {
    const currentDate = d.dateString;
    setDateSelected(currentDate);
    dispatch(setSelectedDate(currentDate));
  };

  useEffect(() => {
    const init = () => {
      const date = getCurrentDateUS();
      if (date) {
        setCurrentDate(date);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setDateSelected(selectedDate);
    }
  }, [selectedDate]);

  const markedDates = dateSelected
    ? {
        [dateSelected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }
    : undefined;

  return { goBack, onDayPress, dateSelected, currentDate, markedDates };
};
