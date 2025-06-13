import colors from "@src/theme/colors";
import { StyleSheet } from "react-native";

const alpha25Percent = "40";

export const styles = StyleSheet.create({
  inactiveDot: {
    backgroundColor: colors.blue + alpha25Percent,
  },
  dot: {
    height: 10,
    width: 30,
    borderRadius: 8,
    backgroundColor: colors.blue,
  },
  pagination: {
    paddingHorizontal: 0,
    paddingVertical: 24,
  },
});
