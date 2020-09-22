import * as actionTypes from './actions'

const initialState = {
  inProgress: false,
  userName: '',
  userScore: 0,
  quiz: null,
  currentCard: 1,
  userAnswers: new Map(),
  doneAnswers: new Map()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IN_PROGRESS:
      return {
        ...state,
        inProgress: action.value
      }
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName
      }
    case actionTypes.SET_USER_SCORE:
      return {
        ...state,
        userScore: action.userScore
      }
    case actionTypes.SET_SCORE:
      const isPlus = action.action === 'plus'
      return {
        ...state,
        userScore: isPlus ? state.userScore + 10 : state.userScore - 10
      }
    case actionTypes.RESET_GAME:
      return {
        ...state,
        quiz: null,
        currentCard: 1,
        userScore: 0,
        userAnswers: new Map(),
        doneAnswers: new Map()
      }
    case actionTypes.SET_QUIZ:
      return {
        ...state,
        quiz: action.quiz
      }
    case actionTypes.SET_CURRENT_CARD:
      const isNext = action.value === 'next'
      return {
        ...state,
        currentCard: isNext ? state.currentCard + 1 : state.currentCard - 1
      }
    case actionTypes.SET_USER_ANSWERS:
      return {
        ...state,
        userAnswers: action.answers
      }
    case actionTypes.SET_DONE_ANSWERS:
      return {
        ...state,
        doneAnswers: action.answers
      }
    case actionTypes.ON_UPDATE_USER_STATE:
      const { quiz, currentCard, userScore, userAnswers, doneAnswers } = action.data
      return {
        ...state,
        quiz,
        currentCard,
        userScore,
        userAnswers: new Map(userAnswers),
        doneAnswers: new Map(doneAnswers)
      }
    default: return state
  }
}

export default reducer