import React from "react";
import { connect } from 'react-redux'

const GameHeader = ({ userName, userScore, currentCard, cardLength }) => {
  return (
    <header>
      <span>User: <b>{ userName }</b></span>
      <span>Card: <b>{ currentCard }/{ cardLength }</b></span>
      <span>Score: <b>{ userScore }</b></span>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.userName,
    userScore: state.userScore,
    currentCard: state.currentCard
  }
}

export default connect(mapStateToProps)(GameHeader)