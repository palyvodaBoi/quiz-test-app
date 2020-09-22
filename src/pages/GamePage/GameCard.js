import React from "react"
import { decodeHTMLEntities } from '../../utils'
import './GameCard.scss'

export default ({cardData, userAnswer, isDisabled, onUserAnswer}) => {
  const formattedQuestion = decodeHTMLEntities(cardData.question)

  return (
    <div className="gpc-wrapper">
      <h4 className='gpc-header'>{ formattedQuestion }</h4>
      <div className="gpc-radio-group"
           onChange={(e)=>onUserAnswer(e.target.value)}>
        <div className="gpc-radio-group_item">
          <input id="True"
                 type="radio"
                 name="answer"
                 value="True"
                 defaultChecked={userAnswer === 'True'}
                 disabled={isDisabled} />
          <label htmlFor="True">Yes</label>
        </div>
        <div className="gpc-radio-group_item">
          <input id="False"
                 type="radio"
                 name="answer"
                 value="False"
                 defaultChecked={userAnswer === 'False'}
                 disabled={isDisabled}/>
          <label htmlFor="False">No</label>
        </div>
      </div>
    </div>
  )
}