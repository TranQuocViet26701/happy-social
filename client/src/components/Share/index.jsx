import { BsEmojiLaughing } from 'react-icons/bs'
import { MdPhotoLibrary, MdLocationOn } from 'react-icons/md'
import { FaUserTag } from 'react-icons/fa'
import './Share.scss'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axiosClient from '../../api/axiosClient'

export default function Share() {
  const { user } = useContext(AuthContext)
  const description = useRef()

  const [files, setFiles] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i])
    }

    formData.append('userId', user._id)
    formData.append('description', description.current.value)

    try {
      await axiosClient.post('/posts', formData)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='share'>
      <form className='share__wrapper' onSubmit={handleSubmit}>
        <div className='share__top'>
          <img
            src={user.profilePicture || '/assets/noAvatar.png'}
            alt=''
            className='share__profileImg'
          />
          <input
            placeholder={`What's on your mind, ${user.username}?`}
            className='share__input'
            ref={description}
          />
        </div>
        <hr className='share__hr' />
        {Object.values(files).length > 0 && (
          <div className='share__center'>
            {Object.values(files).map((image, index) => (
              <div key={index} className='share__image'>
                <img alt='' src={URL.createObjectURL(image)} />
              </div>
            ))}
            <button
              className='share__image__cancel'
              onClick={() => setFiles({})}
            >
              Cancel
            </button>
          </div>
        )}
        <div className='share__bottom'>
          <div className='share__options'>
            <label htmlFor='file' className='share__option'>
              <MdPhotoLibrary
                style={{ color: 'rgb(69, 189, 98)' }}
                className='share__option__icon'
              />
              <span className='share__option__text'>Photo/Video</span>
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                multiple
                accept='.png, .jpg, .jpge'
                onChange={(e) => setFiles(e.target.files)}
              />
            </label>
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
          <button className='share__button' type='submit'>
            Post
          </button>
        </div>
      </form>
    </div>
  )
}
