import { Platform } from "react-native";
import { Dimensions } from "react-native";

export const isAndroid = Platform.OS === "android";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const BASE_HEIGHT = 667;

export const scale = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
