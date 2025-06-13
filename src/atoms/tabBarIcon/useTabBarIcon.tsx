import HomeIcon from "@assets/tabnav_home.png";
import HomeIconActive from "@assets/tabnav_home_active.png";
import FeedIcon from "@assets/tabnav_feed.png";
import FeedIconActive from "@assets/tabnav_feed_active.png";
import HelpMeIcon from "@assets/tabnav_help_me.png";
import RewardIcon from "@assets/tabnav_reward.png";
import RewardIconActive from "@assets/tabnav_reward_active.png";
import ProfileIcon from "@assets/tab-nav_profile.png";
import ProfileIconActive from "@assets/tab-nav_profile_active.png";
import MenuIcon from "@assets/tabnav_menu.png";
import MenuIconActive from "@assets/tabnav_menu_active.png";
import { Image, HelpIcon } from "./styles";
import { TabBarIconProps } from "./tabBarIcon.types";

export default (props: Partial<TabBarIconProps>) => {
  const getIcon = (value: string) => {
    switch (true) {
      case value === "home":
        return (
          <Image
            source={props?.isActive ? HomeIconActive : HomeIcon}
            {...props}
          />
        );
      case value === "feed":
        return (
          <Image
            source={props?.isActive ? FeedIconActive : FeedIcon}
            {...props}
          />
        );
      case value === "help_me":
        return (
          <HelpIcon>
            <Image source={HelpMeIcon} {...props} />
          </HelpIcon>
        );
      case value === "reward":
        return (
          <Image
            source={props?.isActive ? RewardIconActive : RewardIcon}
            {...props}
          />
        );

      case value === "user":
        return (
          <Image
            source={props?.isActive ? ProfileIconActive : ProfileIcon}
            {...props}
          />
        );
      case value === "menu":
        return (
          <Image
            source={props?.isActive ? MenuIconActive : MenuIcon}
            {...props}
          />
        );

      default:
        return null;
    }
  };

  return {
    getIcon,
  };
};
