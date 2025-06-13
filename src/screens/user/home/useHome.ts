import homeConstants from "./home.constants";

export default () => {
  const { welcome, message } = homeConstants;

  return {
    welcome,
    message,
  };
};
