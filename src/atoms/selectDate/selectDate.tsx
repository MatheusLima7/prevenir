import { Title, Wrapper, CalendarIcon } from "./selectDate.styles";
import useSelectDate from "./useSelectDate";

export default function SelectDate({ disabled }: { disabled: boolean }) {
  const { select_date, onPress, hasFilledDate } = useSelectDate(disabled);

  return (
    <Wrapper onPress={onPress}>
      <Title filled={hasFilledDate}>{select_date}</Title>
      <CalendarIcon filled={hasFilledDate} />
    </Wrapper>
  );
}
