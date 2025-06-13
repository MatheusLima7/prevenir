import { initializeApp } from "@react-native-firebase/app";
import messaging from "@react-native-firebase/messaging";
import { NotificationProps, setData } from "@src/features/notifications";
import { useAppDispatch } from "@src/store/hooks";
import "firebase/auth";
import { useEffect } from "react";

export default () => {
  const dispatch = useAppDispatch();

  const setNewMessage = (message: NotificationProps) => {
    dispatch(setData([message]));
  };

  useEffect(() => {
    const subscribeToTopic = async () => {
      try {
        await messaging().subscribeToTopic("PREVENIR_FEED");
      } catch (error) {
        console.error("Erro ao se inscrever no tópico:", error);
      }
    };

    const init = async () => {
      const firebaseConfig = {
        projectId: "prevenir10i9",
        appId: "1:1031809397202:android:2d55f1e38a2c92016fd80b",
      };
      initializeApp(firebaseConfig);
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Permissão concedida para notificações!");
      }

      await messaging().getToken();

      subscribeToTopic();

      messaging().onMessage(async (remoteMessage) => {
        if (remoteMessage) {
          setNewMessage(remoteMessage.data);
        }
      });

      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        if (remoteMessage) {
          setNewMessage(remoteMessage.data);
        }
      });

      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            setNewMessage(remoteMessage.data);
          }
        });
    };

    init();
  }, []);

  return {};
};
