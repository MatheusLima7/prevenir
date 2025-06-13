import {
  useAppChosenTheSupported,
  useAppContactPermissionDisabled,
  useAppFormAnswered,
  useAppHistoryStarted,
  useAppLocationPermissionDisabled,
  useAppNewVersion,
  useAppOnBoardingCompleted,
  useAppPsychoActiveSubstanceUse,
  useAppQuestionnaireCompleted,
  useAppQuestionsAnswered,
  useAppQuestionsFinished,
  useAppSkipContactPermission,
  useAppSkipLocationPermission,
  useAppTerms,
  useAppTypeUserLoggedAuth,
} from "@src/features/app/selectors";
import psychoactiveSubstanceUseConstants from "@src/screens/psychoactiveSubstanceUse/psychoactiveSubstanceUse.constants";
import { getCurrentDate } from "@src/utils/date";

export default () => {
  const acceptTerms = useAppTerms();
  const onBoardingCompleted = useAppOnBoardingCompleted();
  const formAnswered = useAppFormAnswered();
  const questionsAnswered = useAppQuestionsAnswered();
  const questionsFinished = useAppQuestionsFinished();
  const historyStated = useAppHistoryStarted();
  const hasNewVersion = useAppNewVersion();
  const contactPermissionDisabled = useAppContactPermissionDisabled();
  const locationPermissionsDisabled = useAppLocationPermissionDisabled();
  const skipContactPermission = useAppSkipContactPermission();
  const skipLocationPermission = useAppSkipLocationPermission();
  const typeUserLogged = useAppTypeUserLoggedAuth();
  const isSupporter = typeUserLogged === "supporter";

  const currentDate = getCurrentDate();
  const answersPsycoSubstances = useAppPsychoActiveSubstanceUse();

  const chosenTheSupporter = useAppChosenTheSupported();

  const checkingQuestions = () => {
    const { titles } = psychoactiveSubstanceUseConstants;
    const answereds = titles.map((item) => {
      if (answersPsycoSubstances?.[currentDate]?.[item.title]) {
        return { ...item, answered: true };
      }

      return item;
    });

    const all = answereds.every((item) => item.answered === true);

    return all;
  };

  const hasAnswerTodayInPsycoSubstances = checkingQuestions();

  const questionnaireCompleted = useAppQuestionnaireCompleted();
  const hasQuestionnaireCompleted = !!(
    currentDate in (questionnaireCompleted ?? {})
  );

  return {
    acceptTerms,
    onBoardingCompleted,
    formAnswered,
    questionsAnswered,
    questionsFinished,
    historyStated,
    hasNewVersion,
    contactPermissionDisabled,
    locationPermissionsDisabled,
    skipContactPermission,
    skipLocationPermission,
    typeUserLogged,
    isSupporter,
    hasAnswerTodayInPsycoSubstances,
    hasQuestionnaireCompleted,
    chosenTheSupporter,
  };
};
