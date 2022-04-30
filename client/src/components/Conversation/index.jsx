import React from 'react'
import PropTypes from 'prop-types'

import './Conversation.scss'

function Conversation(props) {
  return (
    <div className='conversation'>
      <img
        src='http://localhost:3000/assets/noAvatar.png'
        alt=''
        className='conversation__image'
      />
      <span className='conversation__name'>Le Huyen Tran</span>
    </div>
  )
}

Conversation.propTypes = {}

export default Conversation
