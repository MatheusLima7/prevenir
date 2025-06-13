export type AskedQuestions = {
  data: AskedQuestionsProps[];
  pageNumber: number;
  nextPage: number;
  lastPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
};

export type AskedQuestionsResponse = {
  message: string;
  response: AskedQuestions;
};

export type AskedQuestionsProps = {
  question: string;
  answer: string;
};
