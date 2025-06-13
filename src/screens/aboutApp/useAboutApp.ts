import aboutAppConstants from "./aboutApp.constants";

export default () => {
  const {
    title,
    intro,
    mission,
    text_mission,
    resources,
    features,
    developer,
  } = aboutAppConstants;

  return {
    title,
    intro,
    mission,
    text: text_mission,
    resources,
    features,
    developer,
  };
};
