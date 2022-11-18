import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div>
        <h1>Voice diary</h1>
        <div>
          <button onClick={() => <Link to={'/'}></Link>}>Record</button>
          <button onClick={() => <Link to={'/diaryList'}></Link>}>
            Memories
          </button>
        </div>
        <img></img>
        <button>Start label</button>
      </div>
    </>
  )
}

export default NavBar
