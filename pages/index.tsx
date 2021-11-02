import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter()

  const onFileLoad = () => {
    router.push(`/room/${123}`)
  }

  return (
    <div className={styles.container}>
      <label>
        загрузить файл
        <button onClick={onFileLoad}>1231313</button>
        <input type='file' />
      </label>
    </div>
  )
}

export default Home
