import React from "react";
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import arrowLeft from "./arrow-left.svg";
import arrowRight from "./arrow-right.svg";

const GameControl = (props) => {
  const { type, quiz, currentCard, userAnswers, doneAnswers, onSetScore, onSetDoneAnswers, onSetInProgress, onSetCurrentCard } = props
  const history = useHistory()

  const onToggleCardHandler = (event, next) => {
    if (next) {
      calculateScore()
      flipNext()
    } else {
      flipPrev()
    }
  }

  const calculateScore = () => {
    const correctAnswer = quiz.find(q => q.position === currentCard).correct_answer

    if (!doneAnswers.has(currentCard)) {
      correctAnswer === userAnswers.get(currentCard)
        ? onSetScore('plus')
        : onSetScore('minus')
    }
  }

  const flipNext = () => {
    onSetDoneAnswers(new Map(doneAnswers.set(currentCard, true)))

    if (currentCard === quiz.length) {
      sessionStorage.setItem('inProgress', 'false')
      onSetInProgress(false)
      history.push('/results')
    } else {
      onSetCurrentCard('next')
    }
  }

  const flipPrev = () => onSetCurrentCard('prev')

  if (type === 'prev') {
    const isPrevDisabled = currentCard === 1
    return (
      <div className={`gp-card_prev ${isPrevDisabled && 'disabled'}`}
           onClick={onToggleCardHandler}>
        <img src={arrowLeft} alt="arrow-left" width='50px'/>
      </div>
    )
  } else {
    const isNextDisabled = !userAnswers.has(currentCard)
    return (
      <div className={`gp-card_next ${isNextDisabled && 'disabled'}`}
           onClick={(e)=>onToggleCardHandler(e,true)}>
        <img src={arrowRight} alt="arrow-right" width='50px' />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentCard: state.currentCard,
    userAnswers: state.userAnswers,
    doneAnswers: state.doneAnswers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetScore: (action) => dispatch({type: actionTypes.SET_SCORE, action}),
    onSetDoneAnswers: (answers) => dispatch({type: actionTypes.SET_DONE_ANSWERS, answers}),
    onSetInProgress: (value) => dispatch({type: actionTypes.SET_IN_PROGRESS, value}),
    onSetCurrentCard: (value) => dispatch({type: actionTypes.SET_CURRENT_CARD, value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameControl)