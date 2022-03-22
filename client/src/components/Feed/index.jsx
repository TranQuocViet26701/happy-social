import { Posts } from '../../data/dummyData'
import Post from '../Post'
import Share from '../Share'
import './Feed.scss'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
