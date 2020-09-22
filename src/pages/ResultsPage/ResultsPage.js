import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import './ResultsPage.scss'

const ResultsPage = ({ userName, userScore, onResetGame, onUpdateUserState }) => {
  const history = useHistory()

  const headerContent = () => {
    switch (true) {
      case (userScore <= 0): return `Not good, ${userName}...`
      case (userScore > 0 && userScore <= 50): return `Nice job, ${userName}!`
      case (userScore > 50): return `Wow! Great, ${userName}!`
      default: return `Nice job, ${userName}!`
    }
  }

  const onPlayAgainHandler = () => {
    const userState = {
      quiz: null,
      currentCard: 1,
      userScore,
      userAnswers: new Map(),
      doneAnswers: new Map()
    }
    onUpdateUserState(userState)
    history.push('/')
  }

  const onNewGameHandler = () => {
    onResetGame()
    history.push('/')
  }

  return (
    <div className="rp-wrapper">
      <main className="rp-content">
        <h3 className='rp-header'>{ headerContent() }</h3>
        <p>You've got <b>{ userScore }</b> points</p>
        <div className="rp-button-group">
          <button className='rp-button-group_item'
                  onClick={onPlayAgainHandler}>
            Play again
          </button>
          <button className='rp-button-group_item'
                  onClick={onNewGameHandler}>
            New game
          </button>
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.userName,
    userScore: state.userScore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetGame: () => dispatch({type: actionTypes.RESET_GAME}),
    onUpdateUserState: (data) => dispatch({type: actionTypes.ON_UPDATE_USER_STATE, data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)