import loginConstants from "./login.constants";

export default () => {
  const { press_here, need_to_help } = loginConstants;

  return {
    need_to_help,
    press_here,
  };
};
