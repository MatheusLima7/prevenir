import { StepProps } from "@src/screens/user/questions/formQuestions/step/formQuestions.types";

export type PersonalProps = {
  name: string;
  nickName: string;
  socialName: string;
  cpf: string;
  dateDirth: string;
};

export type AnswerProps = {
  answerId: string;
  title: string;
  content: string;
  orderView: number;
};

export type QuestionProps = {
  id: string;
  orderView: number;
  title: string;
  answers: AnswerProps[];
};

export type QuestionnaireProps = {
  id: string;
  typeQuestionnaire: string;
  questions: QuestionProps[];
};

export interface AppSliceState {
  personal: PersonalProps;
  questionnaire: QuestionnaireProps;
  lastUsage: string;
  steps: StepProps[];
}
