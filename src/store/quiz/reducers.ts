import {
  QuestionState,
  SET_QUESTIONS,
  UPDATE_DIFFICULTY,
  UPDATE_SCORE,
  QuizActionTypes,
  FETCH_QUESTIONS,
} from "./types";

const initialState: QuestionState = {
  questions: [],
  difficulty: "easy",
  score: 0,
  loading: false
};

export function quizReducer(state = initialState, action: QuizActionTypes) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
      case FETCH_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
}
