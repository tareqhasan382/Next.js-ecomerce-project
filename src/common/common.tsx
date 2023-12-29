export type Option = {
  value: string;
  isCorrect: boolean;
};

export type QuestionSet = {
  question: string;
  options: Option[];
};
