import styles from './styles.module.css'

export default function Footer() {
    return (
        <div className={styles.fakeBackground}>
            <div
                className={styles.footer}
            >
                <Ajuda />
                <RedesSociais />
                <Creditos />
            </div>
        </div>
    )
}

function Ajuda() {
    return (
        <div
            className={styles.div}
        >
            <p className={styles.p}>Precisa de ajuda, tem dúvidas ou sugestões? Escreve pra <a href='mailto:devall@itexto.com.br' className={styles.a}>gente!</a></p>
        </div>
    )
}

function RedesSociais() {
    return (
        <div
            className={styles.div}
        >
            <i className='bx bxl-linkedin-square' ></i>
            <i className='bx bxl-twitter' ></i>
            <i className='bx bxl-facebook-square' ></i>
            <i className='bx bxl-github' ></i>
        </div>
    )
}

function Creditos() {
    return (
        <div
            className={styles.div}
        >
            <p className={styles.p}>Desenvolvido por <a href='https://vittor-javidan.github.io/' className={styles.vittorJavidan}>Vittor Javidan</a> com rerência ao site oficial <a href='https://devall.com.br/' className={styles.devAll}>/dev/All</a> da <a href='https://itexto.com.br/' className={styles.iTexto}><span className={styles.red}>i</span>texto</a></p>
        </div>
    )
}
