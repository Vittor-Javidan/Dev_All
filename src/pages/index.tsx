import { Content } from '@/components/Content'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from './styles.module.css'

//TODO: Traduzir todos os components, funções e variáveis para português
export default function Home() {
  return (
    <div className={styles.background}>
      {/*
        Coloquei a navbar aqui, pois achei que poderia ser interessante se o usuário conseguisse ver
        a navbar a qualquer momento, de acordo com sua navegação caso seja carrega muitos posts.
      */}
      <Navbar/>
      <div className={styles.div}>
        <Content />
        <Footer />
      </div>
    </div>
  )
}
