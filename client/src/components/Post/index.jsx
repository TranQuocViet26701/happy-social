import './Post.scss'
import { MdMoreHoriz } from 'react-icons/md'

export default function Post() {
  return (
    <div className='post'>
      <div className='post__wrapper'>
        <div className='post__top'>
          <div className='post__top__left'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='post__profileImg'
            />
            <div className='post__info'>
              <div className='post__author'>Le Huyen Tran</div>
              <div className='post__date'>5m ago</div>
            </div>
          </div>
          <div className='post__top__right'>
            <MdMoreHoriz className='post__top__right__icon' />
          </div>
        </div>
        <div className='post__center'>
          <div className='post__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            repellat molestiae sequi esse quasi saepe rem possimus incidunt
            laborum nesciunt aspernatur fugit, fugiat impedit illo et! Sunt
            ipsum dignissimos eos?
          </div>
          <img
            src='https://images.unsplash.com/photo-1556518385-88f3e7948ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
            alt=''
            className='post__img'
          />
        </div>
        <div className='post__bottom'>
          <div className='post__bottom__left'>
            <img
              src='/public/assets/like.png'
              alt=''
              className='post__reaction'
            />
            <img
              src='/public/assets/heart.png'
              alt=''
              className='post__reaction'
            />
            <span className='post__countReaction'>30</span>
          </div>
          <div className='post__bottom__right'>
            <span className='post__countComment'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
