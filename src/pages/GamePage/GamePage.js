import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import GameCard from "./GameCard"
import GameHeader from "./GameHeader"
import GameControl from "./GameControl"
import { fetchQuiz, indexQuiz } from '../../utils'
import './GamePage.scss'

const QUIZ_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean'

const GamePage = (props) => {
  const { userScore, quiz, onSetQuiz, currentCard, userAnswers, onSetUserAnswers, doneAnswers, onUpdateUserState } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const inProgressLoc = sessionStorage.getItem('inProgress') === 'true'

    if (inProgressLoc) {
      const userStateLoc = JSON.parse(sessionStorage.getItem('userState'))
      onUpdateUserState(userStateLoc)
      setLoading(false)
    } else {
      getQuiz()
        .then((quiz) => {
          sessionStorage.setItem('inProgress', 'true')
          onSetQuiz(quiz)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [onUpdateUserState, onSetQuiz])

  const getQuiz = async () => {
    const quiz = await fetchQuiz(QUIZ_URL)
    return indexQuiz(quiz)
  }

  // USING THIS FOR HANDLE MANUAL CHANGE OF URL
  window.onbeforeunload = () => {
    const userState = {
      quiz,
      currentCard,
      userScore,
      userAnswers: Array.from(userAnswers),
      doneAnswers: Array.from(doneAnswers)
    }
    sessionStorage.setItem('userState', JSON.stringify(userState))
  }

  const onUserAnswerHandler = (answer) => {
    onSetUserAnswers(new Map(userAnswers.set(currentCard, answer)))
  }

  return (
    <div className='gp-wrapper'>
      {loading
        ? <h3 className='gp-loading'>Loading...</h3>
        : (
          <>
            <GameHeader cardLength={quiz.length} />

            <div className="gp-card_wrapper">
              <GameControl type='prev' />

              {quiz.map(q => q.position === currentCard &&
                <GameCard key={q.position}
                          cardData={q}
                          userAnswer={userAnswers.get(currentCard)}
                          isDisabled={doneAnswers.has(currentCard)}
                          onUserAnswer={onUserAnswerHandler} />
              )}

              <GameControl type='next' />
            </div>
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentCard: state.currentCard,
    userAnswers: state.userAnswers,
    userScore: state.userScore,
    doneAnswers: state.doneAnswers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetQuiz: (quiz) => dispatch({type: actionTypes.SET_QUIZ, quiz}),
    onSetUserAnswers: (answers) => dispatch({type: actionTypes.SET_USER_ANSWERS, answers}),
    onUpdateUserState: (data) => dispatch({type: actionTypes.ON_UPDATE_USER_STATE, data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)