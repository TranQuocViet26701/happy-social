import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import { IoSend } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'
import { ChatOnline, Conversation, Message, Topbar } from '../../components'
import './Messenger.scss'

function Messenger(props) {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='messenger__menu'>
          <div className='messenger__menu__input'>
            <MdSearch className='search__icon' />
            <input type='text' placeholder='Search Messenger' />
          </div>
          <div className='conversations'>
            <div className='conversations__container'>
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
              <Conversation />
            </div>
          </div>
        </div>
        <div className='messenger__box'>
          <div className='messenger__box__top'>
            <div className='messenger__box__top__left'>
              <img src='/assets/noAvatar.png' alt='' />
              <span>Le Huyen Tran</span>
            </div>
            <div className='messenger__box__top__right'>
              <div className='messenger__box__top__right__icon'>
                <BsTelephoneFill />
              </div>
              <div className='messenger__box__top__right__icon'>
                <FaVideo />
              </div>
              <div className='messenger__box__top__right__icon'>
                <HiDotsCircleHorizontal />
              </div>
            </div>
            <div className='messenger__box__center'></div>
            <div className='messenger__box__bottom'></div>
          </div>
          <div className='messenger__box__center'>
            <Message />
            <Message own />
            <Message />
            <Message own />

            <Message />
            <Message own />
            <Message />
            <Message own />

            <Message />
            <Message own />
            <Message />
            <Message own />

            <Message />
            <Message own />
            <Message />
            <Message own />

            <Message />
            <Message own />
            <Message />
            <Message own />
          </div>
          <div className='messenger__box__bottom'>
            <textarea name='' id='' placeholder='Aa'></textarea>
            <div className='messenger__box__bottom__icon'>
              <IoSend />
            </div>
          </div>
        </div>
        <div className='messenger__online'>
          <h4 className='messenger__online__title'>Online Friends</h4>
          <ChatOnline />
        </div>
      </div>
    </>
  )
}

Messenger.propTypes = {}

export default Messenger
