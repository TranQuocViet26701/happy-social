import React from 'react'
import PropTypes from 'prop-types'
import './CloseFriend.scss'

function CloseFriend({ friend }) {
  return (
    <li className='close-friend'>
      <img src={friend.profilePicture} alt='' className='close-friend__img' />
      <span className='close-friend__text'>{friend.username}</span>
    </li>
  )
}

CloseFriend.propTypes = {
  friend: PropTypes.object,
}

export default CloseFriend
