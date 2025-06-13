export type TypeUserProps = "user" | "supporter" | null;

type PsychoActiveSubstanceUseProps = {
  [key: string]: {
    [key: string]: {
      answer: boolean | null;
      selectedDate: string | null;
    };
  };
};

type QuestionnaireCompletedProps = {
  [key: string]: boolean;
};

export interface AppSliceState {
  appTerms: boolean;
  appAuth: boolean;
  appSupporterTerms: boolean;
  appTypeUserLogged: TypeUserProps;
  appOnBoardingCompleted: boolean;
  appQuestionsFinished: boolean;
  appQuestionsAnswered: boolean;
  appFormAnswered: boolean;
  appHistoryStarted: boolean;
  appNewVersion: boolean;
  appContactPermissionDisabled: boolean;
  appLocationPermissionDisabled: boolean;
  appSkipContactPermission: boolean;
  appSkipLocationPermission: boolean;
  appPsychoActiveSubstanceUse: PsychoActiveSubstanceUseProps;
  appQuestionnaireCompleted: QuestionnaireCompletedProps;
  appMenu: boolean;
  appUserImage: string | null;
  appChosenTheSupported: boolean;
}
