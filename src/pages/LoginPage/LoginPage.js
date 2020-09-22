import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import './LoginPage.scss'

export default function LoginPage({setUser}) {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const onStartHandler = () => {
    setUser(username)
    history.push('/')
  }

  return (
    <div className='lp-wrapper'>
      <div className="lp-content">
        <h3 className='lp-content_header'>Let's play a game!</h3>
        <div className='lp-content_input-group'>
          <input placeholder=" "
                 className="input-control"
                 autoComplete='false'
                 onChange={(e)=>setUsername(e.target.value)}/>
          <div className="floater" />
        </div>
        <button className={`lp-content_button ${!username && 'disabled'}`}
                onClick={onStartHandler}>
          Start
        </button>
      </div>
    </div>
  )
}