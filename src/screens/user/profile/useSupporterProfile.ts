import profileConstants from "./profile.constants";

export default () => {
  const { forever, age_text } = profileConstants;

  return {
    forever,
    age_text,
  };
};
