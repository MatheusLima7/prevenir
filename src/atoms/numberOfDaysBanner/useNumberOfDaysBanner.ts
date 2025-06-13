import persistenceBannerContants from "./numberOfDaysBanner.contants";

export default () => {
  const { last_reward, persistence, congratulations, persevered } =
    persistenceBannerContants;

  return {
    last_reward,
    persistence,
    congratulations,
    persevered,
  };
};
