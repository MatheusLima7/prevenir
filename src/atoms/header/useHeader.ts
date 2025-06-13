import headerConstants from "./header.constants";

export default () => {
  const { questionaire, date } = headerConstants;

  return {
    date,
    questionaire,
  };
};
