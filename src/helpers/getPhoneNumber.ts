import { formatPhoneNumber } from "@src/utils/formatPhoneNumber";
import { PermissionsAndroid, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import SimCardsManagerModule from "react-native-sim-cards-manager";

export async function getPhoneNumbers() {
  if (Platform.OS !== "android") return null;
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_NUMBERS,
    ]);

    if (
      granted["android.permission.READ_PHONE_STATE"] ===
      PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Read Phone State permission granted");
      const apiLevel = await DeviceInfo.getApiLevel();
      if (apiLevel > 30) {
        const phoneNumber = await SimCardsManagerModule.getSimCards();
        return phoneNumber.map((phone) => formatPhoneNumber(phone.phoneNumber));
      }

      const rawLegacyPhoneNumber = await DeviceInfo.getPhoneNumber();
      const legacyPhoneNumber = formatPhoneNumber(rawLegacyPhoneNumber);
      return [legacyPhoneNumber];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting phone number:", error);
    throw new Error(error as string);
  }
}
