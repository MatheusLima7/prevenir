import loginConstants from "./login.constants";

export default () => {
  const { title, text, org } = loginConstants;

  return {
    title,
    text,
    org,
  };
};
