import { useAppSelector } from "@store/hooks";

export const useAppTerms = () =>
  useAppSelector(({ app: { appTerms } }) => appTerms);

export const useAppAuth = () =>
  useAppSelector(({ app: { appAuth } }) => appAuth);

export const useAppTypeUserLoggedAuth = () =>
  useAppSelector(({ app: { appTypeUserLogged } }) => appTypeUserLogged);

export const useAppOnBoardingCompleted = () =>
  useAppSelector(
    ({ app: { appOnBoardingCompleted } }) => appOnBoardingCompleted
  );

export const useAppQuestionsFinished = () =>
  useAppSelector(({ app: { appQuestionsFinished } }) => appQuestionsFinished);

export const useAppQuestionsAnswered = () =>
  useAppSelector(({ app: { appQuestionsAnswered } }) => appQuestionsAnswered);

export const useAppFormAnswered = () =>
  useAppSelector(({ app: { appFormAnswered } }) => appFormAnswered);

export const useAppHistoryStarted = () =>
  useAppSelector(({ app: { appHistoryStarted } }) => appHistoryStarted);

export const useAppNewVersion = () =>
  useAppSelector(({ app: { appNewVersion } }) => appNewVersion);

export const useAppContactPermissionDisabled = () =>
  useAppSelector(
    ({ app: { appContactPermissionDisabled } }) => appContactPermissionDisabled
  );

export const useAppLocationPermissionDisabled = () =>
  useAppSelector(
    ({ app: { appLocationPermissionDisabled } }) =>
      appLocationPermissionDisabled
  );

export const useAppSkipContactPermission = () =>
  useAppSelector(
    ({ app: { appSkipContactPermission } }) => appSkipContactPermission
  );

export const useAppSkipLocationPermission = () =>
  useAppSelector(
    ({ app: { appSkipLocationPermission } }) => appSkipLocationPermission
  );

export const useAppPsychoActiveSubstanceUse = () =>
  useAppSelector(
    ({ app: { appPsychoActiveSubstanceUse } }) => appPsychoActiveSubstanceUse
  );

export const useAppQuestionnaireCompleted = () =>
  useAppSelector(
    ({ app: { appQuestionnaireCompleted } }) => appQuestionnaireCompleted
  );

export const useAppMenu = () =>
  useAppSelector(({ app: { appMenu } }) => appMenu);

export const useAppUserImage = () =>
  useAppSelector(({ app: { appUserImage } }) => appUserImage);

export const useAppChosenTheSupported = () =>
  useAppSelector(({ app: { appChosenTheSupported } }) => appChosenTheSupported);
