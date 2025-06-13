import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TermsScreen from "../screens/terms";
import { ParamList } from "./types";
import OnBoardingScreen from "@src/screens/onboarding";
import routes from "./routes";
import TellYourHistoryScreen from "@src/screens/tellYourHistory";

import FormDataScreen from "@src/screens/user/questions/formData";
import FinishScreen from "@src/screens/user/questions/finish";
import updateAppScreen from "@src/screens/updateApp";
import StepScreen from "@src/screens/user/questions/formQuestions/step";
import LocationPermissionsScreen from "@src/screens/locationPermission";
import ContactPermissionsScreen from "@src/screens/contactPermission";
import NewQuestionnaire from "@src/screens/newQuestionnaire";
import PeriodicQuestionnaire from "@src/screens/periodicQuestionnaire";
import PsychoactiveSubstanceUse from "@src/screens/psychoactiveSubstanceUse";
import ModalHeaderBackButton from "@src/atoms/modalHeaderBackButton";
import colors from "@src/theme/colors";
import Header from "@src/atoms/header";
import QuestionnaireCompleted from "@src/screens/questionnaireCompleted";
import RootTab from "./rootTab";
import RootTabSupporter from "./rootTabSupporter";
import HeaderScreen from "@src/atoms/headerScreen";
import MyHistory from "@src/screens/myHistory";
import usePrivatedStack from "./usePrivatedStack";
import OpenSupport from "@src/screens/openSupport";
import Supporteds from "@src/screens/supporteds/supporteds";
import AccountDeleted from "@src/screens/accountDeleted/accountDeleted";

const PrivatedStackNav = createNativeStackNavigator<ParamList>();

export default function PrivatedStack() {
  const {
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
    isSupporter,
    hasAnswerTodayInPsycoSubstances,
    hasQuestionnaireCompleted,
    chosenTheSupporter,
  } = usePrivatedStack();

  return (
    <PrivatedStackNav.Navigator screenOptions={{ headerShown: false }}>
      {isSupporter && !chosenTheSupporter && (
        <PrivatedStackNav.Screen
          key={routes.OPEN_SUPPORT}
          name={routes.OPEN_SUPPORT}
          initialParams={{
            title: routes.OPEN_SUPPORT,
          }}
          component={OpenSupport}
        />
      )}

      {isSupporter && !chosenTheSupporter && (
        <PrivatedStackNav.Screen
          key={routes.SUPPORTEDs}
          name={routes.SUPPORTEDs}
          initialParams={{
            title: routes.SUPPORTEDs,
          }}
          component={Supporteds}
        />
      )}
      {!acceptTerms && (
        <PrivatedStackNav.Screen
          key={routes.USER_TERMS}
          name={routes.USER_TERMS}
          initialParams={{
            title: routes.USER_TERMS,
          }}
          component={TermsScreen}
        />
      )}
      {locationPermissionsDisabled &&
        !skipLocationPermission &&
        !isSupporter && (
          <PrivatedStackNav.Screen
            key={routes.LOCATION_PERMISSION}
            name={routes.LOCATION_PERMISSION}
            initialParams={{
              title: routes.LOCATION_PERMISSION,
            }}
            component={LocationPermissionsScreen}
          />
        )}
      {contactPermissionDisabled && !skipContactPermission && !isSupporter && (
        <PrivatedStackNav.Screen
          key={routes.CONTACT_PERMISSION}
          name={routes.CONTACT_PERMISSION}
          initialParams={{
            title: routes.CONTACT_PERMISSION,
          }}
          component={ContactPermissionsScreen}
        />
      )}
      {hasNewVersion && (
        <PrivatedStackNav.Screen
          key={routes.UPDATE_APP}
          name={routes.UPDATE_APP}
          initialParams={{
            title: routes.UPDATE_APP,
          }}
          component={updateAppScreen}
        />
      )}
      {!onBoardingCompleted && (
        <>
          <PrivatedStackNav.Screen
            key={routes.ONBOARDING}
            name={routes.ONBOARDING}
            initialParams={{
              title: routes.ONBOARDING,
            }}
            component={OnBoardingScreen}
          />
        </>
      )}
      {!historyStated && !isSupporter && (
        <PrivatedStackNav.Screen
          key={routes.TELL_YOUR_HISTORY}
          name={routes.TELL_YOUR_HISTORY}
          initialParams={{
            title: routes.TELL_YOUR_HISTORY,
          }}
          component={TellYourHistoryScreen}
        />
      )}
      {!formAnswered && !isSupporter && (
        <PrivatedStackNav.Screen
          key={routes.USER_FORM}
          name={routes.USER_FORM}
          initialParams={{
            title: routes.USER_FORM,
          }}
          component={FormDataScreen}
        />
      )}
      {!questionsAnswered && !isSupporter && (
        <PrivatedStackNav.Screen
          key={routes.USER_STEPS}
          name={routes.USER_STEPS}
          initialParams={{
            title: routes.USER_STEPS,
          }}
          component={StepScreen}
        />
      )}
      {!questionsFinished && !isSupporter && (
        <PrivatedStackNav.Screen
          key={routes.FINISHED}
          name={routes.FINISHED}
          initialParams={{
            title: routes.FINISHED,
          }}
          component={FinishScreen}
        />
      )}
      {!isSupporter && !hasAnswerTodayInPsycoSubstances && (
        <PrivatedStackNav.Screen
          key={routes.PSYCHOACTIVE_SUBSTANCE_USE}
          name={routes.PSYCHOACTIVE_SUBSTANCE_USE}
          initialParams={{
            title: routes.PSYCHOACTIVE_SUBSTANCE_USE,
          }}
          component={PsychoactiveSubstanceUse}
        />
      )}
      {!isSupporter && !hasQuestionnaireCompleted && (
        <PrivatedStackNav.Screen
          key={routes.NEW_QUESTIIONAIRE}
          name={routes.NEW_QUESTIIONAIRE}
          initialParams={{
            title: routes.NEW_QUESTIIONAIRE,
          }}
          component={NewQuestionnaire}
        />
      )}
      {!isSupporter && !hasAnswerTodayInPsycoSubstances && (
        <PrivatedStackNav.Screen
          key={routes.SELECT_DATE}
          name={routes.SELECT_DATE}
          initialParams={{
            title: routes.SELECT_DATE,
          }}
          component={ModalHeaderBackButton}
        />
      )}
      {!isSupporter && !hasQuestionnaireCompleted && (
        <PrivatedStackNav.Screen
          options={{
            presentation: "card",
            headerTitle: () => <Header />,
            headerShown: true,
            headerStyle: { backgroundColor: colors.white },
            headerTintColor: colors.blue,
            headerTitleStyle: { fontWeight: "bold" },
            headerBackVisible: false,
          }}
          key={routes.PERIODIC_QUESTIONNAIRE}
          name={routes.PERIODIC_QUESTIONNAIRE}
          initialParams={{
            title: routes.PERIODIC_QUESTIONNAIRE,
          }}
          component={PeriodicQuestionnaire}
        />
      )}
      {!isSupporter && !hasQuestionnaireCompleted && (
        <PrivatedStackNav.Screen
          options={{
            presentation: "card",
            headerTitle: () => <Header />,
            headerShown: true,
            headerStyle: { backgroundColor: colors.white },
            headerTintColor: colors.blue,
            headerTitleStyle: { fontWeight: "bold" },
            headerBackVisible: false,
          }}
          key={routes.QUESTIONNAIRE_COMPLETED}
          name={routes.QUESTIONNAIRE_COMPLETED}
          initialParams={{
            title: routes.QUESTIONNAIRE_COMPLETED,
          }}
          component={QuestionnaireCompleted}
        />
      )}
      {!isSupporter && (
        <>
          <PrivatedStackNav.Screen
            name={routes.ROOT_TAB}
            component={RootTab}
            options={{ headerShown: false }}
          />
          <PrivatedStackNav.Screen
            name={routes.USER_ACCOUNT_DELETED}
            component={AccountDeleted}
            options={{ headerShown: false }}
          />
        </>
      )}
      {isSupporter && (
        <PrivatedStackNav.Screen
          name={routes.ROOT_TAB_SUPPORTER}
          component={RootTabSupporter}
          options={{ headerShown: false }}
        />
      )}
      <PrivatedStackNav.Screen
        name={routes.MY_HISTORY}
        component={MyHistory}
        options={{
          title: "Histórico",
          header: () => <HeaderScreen title="Histórico" />,
          headerShown: true,
        }}
      />
    </PrivatedStackNav.Navigator>
  );
}
