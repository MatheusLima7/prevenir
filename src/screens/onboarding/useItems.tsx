import Heart from "@assets/heart.png";
import Help from "@assets/help.png";
import Hearts from "@assets/hearts.png";
import News from "@assets/news.png";
import { CarouselItemProps } from "@src/molecules/carousel/carousel.types";
import WelcomeOnBoarding from "@src/atoms/onboarding/welcome";
import CallingForHelp from "@src/atoms/onboarding/callingForHelp";
import EmotionalSupport from "@src/atoms/onboarding/emotionalSupport";
import Feed from "@src/atoms/onboarding/feed";
import { useAppTypeUserLoggedAuth } from "@src/features/app/selectors";

export default () => {
  const typeUserLogged = useAppTypeUserLoggedAuth();

  const items: CarouselItemProps[] = [
    {
      title: "Bem-vindo ao Espaço Prevenir Virtual",
      image: Heart,
      Content: WelcomeOnBoarding,
    },
    {
      title: "Chamando ajuda",
      image: Help,
      Content: CallingForHelp,
    },
    ...(typeUserLogged !== "supporter"
      ? [
          {
            title: "Apoiador",
            image: Hearts,
            Content: EmotionalSupport,
          },
        ]
      : []),
    {
      title: "Feed Novidades",
      image: News,
      Content: Feed,
    },
  ];

  return {
    items,
  };
};
