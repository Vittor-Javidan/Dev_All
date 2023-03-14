import Navbar from '../components/Navbar'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.background}>
      {/*
        Coloquei a navbar aqui, pois achei que poderia ser interessante se o usuário conseguisse ver
        a navbar a qualquer momento, de acordo com sua navegação caso seja carrega muitos posts.
      */}
      <Navbar/>
    </div>
  )
}
