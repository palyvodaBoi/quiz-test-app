import React from "react";
import { useHistory } from "react-router-dom";
import './NoMatch.scss'

export default function({userName='stranger'}) {
  const history = useHistory()

  return (
    <main className='container'>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>4</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <span className='particle'>0</span>
      <article className='content'>
        <p>Damnit {userName},</p>
        <p>You got lost in the <strong>404</strong> galaxy.</p>
        <p>
          <button onClick={() => history.push('/')}>Go back to earth.</button>
        </p>
      </article>
    </main>
  )
}