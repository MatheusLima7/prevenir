import loginConstants from "./login.constants";

export default () => {
  const { title, text } = loginConstants;

  return {
    title,
    text,
  };
};
