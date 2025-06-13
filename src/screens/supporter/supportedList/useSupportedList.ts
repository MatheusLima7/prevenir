import supportedListConnstants from "./supportedList.connstants";

export default () => {
  const { supporteds } = supportedListConnstants;

  return {
    isLoading: false,
    supporteds,
  };
};
