import Contacts from "react-native-contacts";
import { PermissionsAndroid, Platform } from "react-native";

export const getContacts = async () => {
  if (Platform.OS === "android") {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );

    if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
      throw new Error("Permissão negada");
    }
  }

  const contacts = await Contacts.getAll();
  return contacts.filter((c) => c.phoneNumbers.length > 0);
};
