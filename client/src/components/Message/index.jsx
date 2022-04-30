import React from 'react'
import PropTypes from 'prop-types'

import './Message.scss'

function Message({ own }) {
  return (
    <div className={`${own ? 'message own' : 'message'}`}>
      {!own && (
        <img
          src='http://localhost:3000/assets/noAvatar.png'
          alt=''
          className='message__image'
        />
      )}
      <div className='message__right'>
        <div className={`${own ? 'message__text own' : 'message__text'}`}>
          Lorem ipsum dt
        </div>
        <div className={`${own ? 'message__time own' : 'message__time'}`}>
          1 minute ago
        </div>
      </div>
    </div>
  )
}

Message.propTypes = {}

export default Message
