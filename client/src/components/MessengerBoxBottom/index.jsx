import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { IoSend } from 'react-icons/io5'

function MessengerBoxBottom({ handleSubmitMessage = null }) {
  const newMessage = useRef('')

  const handleClick = () => {
    if (!handleSubmitMessage) return
    handleSubmitMessage(newMessage.current.value)

    newMessage.current.value = ''
  }

  return (
    <>
      <textarea name='' id='' placeholder='Aa' ref={newMessage}></textarea>
      <div className='messenger__box__bottom__icon'>
        <IoSend onClick={handleClick} />
      </div>
    </>
  )
}

MessengerBoxBottom.propTypes = {
  handleSubmitMessage: PropTypes.func,
}

export default MessengerBoxBottom
