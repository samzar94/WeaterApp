import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage(props) {
  return (
    <div>
      welcome
      <div>
        <Link to="/main">ir a main</Link>
      </div>
    </div>
  )
}

export default WelcomePage
