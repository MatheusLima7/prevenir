import React, { FC } from "react";

import { ModalHeaderBackButtonProps } from "./modalHeaderBackButton.types";
import { Button, CloseIcon, Wrapper } from "./modalHeaderBackButton.styles";

import { Calendar } from "react-native-calendars";
import useModalHeaderBackButton from "./useModalHeaderBackButton";

const ModalHeaderBackButton: FC<ModalHeaderBackButtonProps> = ({
  tintColor,
  onPress,
  icon = "close",
  iconSize = 24,
}) => {
  const { goBack, onDayPress, markedDates, currentDate } =
    useModalHeaderBackButton();

  return (
    <Wrapper>
      <Button onPress={onPress || goBack}>
        <CloseIcon
          name={icon}
          accessibilityLabel="Fechar modal"
          size={iconSize}
          color={tintColor}
        />
      </Button>
      {currentDate && (
        <Calendar
          style={{ marginTop: 50 }}
          onDayPress={onDayPress}
          enableSwipeMonths={true}
          minDate={"2025-01-01"}
          maxDate={currentDate}
          markedDates={markedDates}
        />
      )}
    </Wrapper>
  );
};

export default ModalHeaderBackButton;
