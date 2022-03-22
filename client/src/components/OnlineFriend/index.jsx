import React from 'react'
import PropTypes from 'prop-types'
import './OnlineFriend.scss'

function OnlineFriend({ friend }) {
  return (
    <li className='online-friend'>
      <div className='online-friend__img'>
        <img src={friend.profilePicture} alt='' />
      </div>
      <span className='online-friend__text'>{friend.username}</span>
    </li>
  )
}

OnlineFriend.propTypes = {
  friend: PropTypes.object,
}

export default OnlineFriend
