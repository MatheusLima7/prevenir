export type OptionProps = AnswerProps;

export type FormProps = {
  [key: string]: string[];
};

export type FormDescriptionProps = {
  [key: string]: string;
};

export type SeSelectedOptionsForQuestionProps = {
  number: string;
  answer: string;
};

export type AnswerProps = {
  answerId: string;
  title: string;
  content: string;
  orderView: number;
};

export type QuestionsProps = {
  id: string;
  orderView: number;
  title: string;
  answers: AnswerProps[];
};

export type StepProps = {
  questions: QuestionsProps[];
  currentStep: boolean;
};

export type StepContentProps = {
  index: number;
  step: StepProps;
};
