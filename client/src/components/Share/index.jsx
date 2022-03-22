import { BsEmojiLaughing } from 'react-icons/bs'
import { MdPhotoLibrary, MdLocationOn } from 'react-icons/md'
import { FaUserTag } from 'react-icons/fa'
import './Share.scss'

export default function Share() {
  return (
    <div className='share'>
      <div className='share__wrapper'>
        <div className='share__top'>
          <img
            src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
            alt=''
            className='share__profileImg'
          />
          <input placeholder="What's on your mind?" className='share__input' />
        </div>
        <hr className='share__hr' />
        <div className='share__bottom'>
          <div className='share__options'>
            <div className='share__option'>
              <MdPhotoLibrary
                style={{ color: 'rgb(69, 189, 98)' }}
                className='share__option__icon'
              />
              <span className='share__option__text'>Photo/Video</span>
            </div>
            <div className='share__option'>
              <BsEmojiLaughing
                style={{ color: 'rgb(247, 185, 40)' }}
                className='share__option__icon'
              />
              <span className='share__option__text'>Feelings</span>
            </div>
            <div className='share__option'>
              <FaUserTag
                style={{ color: 'rgb(27, 116, 228)' }}
                className='share__option__icon'
              />
              <span className='share__option__text'>Tag</span>
            </div>
            <div className='share__option'>
              <MdLocationOn
                style={{ color: 'rgb(243, 66, 95)' }}
                className='share__option__icon'
              />
              <span className='share__option__text'>Check in</span>
            </div>
          </div>
          <button className='share__button'>Post</button>
        </div>
      </div>
    </div>
  )
}
