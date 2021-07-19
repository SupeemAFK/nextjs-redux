import styles from '../styles/Home.module.css'
import { AiFillFileAdd, AiOutlineClear } from 'react-icons/ai'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { clearPost } from '../redux/actions/actions'

//components
import Post from '../components/Post'

export default function Home() {
  const { posts } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <Link href="/Addpost">
          <button className={`${styles.btn} ${styles.add}`}>Add Post <AiFillFileAdd className={styles.icon} /></button> 
        </Link>
        <button onClick={() => dispatch(clearPost())} className={`${styles.btn} ${styles.clear}`}>Clear <AiOutlineClear className={styles.icon} /></button>
      </div>
      <div className={styles.postContainer}>
          {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    </div>
  )
}
