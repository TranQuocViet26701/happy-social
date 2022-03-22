import Post from '../Post'
import Share from '../Share'
import './Feed.scss'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
