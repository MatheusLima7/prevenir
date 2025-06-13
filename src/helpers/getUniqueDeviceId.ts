import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getUniqueDeviceId(): Promise<string | null> {
  try {
    const storedId = await AsyncStorage.getItem("deviceUniqueId");
    if (storedId) {
      return storedId;
    }

    const uniqueId = await DeviceInfo.getUniqueId();
    await AsyncStorage.setItem("deviceUniqueId", uniqueId);
    return uniqueId;
  } catch (error) {
    console.error("Error while getting unique ID:", error);
    return null;
  }
}
