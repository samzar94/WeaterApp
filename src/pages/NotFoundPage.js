import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      Not Found
      <div>
        <Link to="/main">volver a main</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
