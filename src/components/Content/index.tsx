import devAllAPI, { APIDataPublicacoes } from "@/APICalls/devAllAPI"
import { ChangeEventHandler, useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'

function useFetch_PrimeirasPublicacoes(callback: (devAllPosts: APIDataPublicacoes) => void) {
    useEffect(() => {
        devAllAPI.get_Publicacoes((posts) => callback(posts))
    }, [])
}

export function Content() {

    const [publicacoes, setPublicacoes] = useState<APIDataPublicacoes>([])
    const [textoPesquisa, setTextoPesquisa] = useState("")
    const [pagina, setPagina] = useState(1)

    useFetch_PrimeirasPublicacoes((posts) => {
        setPublicacoes(posts)
        setPagina(prev => prev + 1)
    })

    function pesquisar() {
        devAllAPI.get_PesquisarPublicacoes((responseData) => {
            setPublicacoes(responseData)
        }, textoPesquisa)
        setPagina(1)
    }

    function carregarMais() {
        devAllAPI.get_PublicacoesPagina((responseData) => {
            setPublicacoes(prev => [...prev, ...responseData])
        }, pagina)
        setPagina(prev => prev + 1)
    }

    return (
        <div className={styles.div}>
            <BarraPesquisa
                value={textoPesquisa}
                onChange={(e) => setTextoPesquisa(e.target.value)}
                onClick={pesquisar}
            />
            <Cards 
                posts={publicacoes}
            />
            <CarregarMaisBotao
                onClick={carregarMais}
            />
        </div>
    )
}

function BarraPesquisa(
    props: {
        value: string
        onChange: ChangeEventHandler<HTMLInputElement>
        onClick: () => void
    }
) {

    return (
        <div
            className={styles.pesquisaDiv}
        >
            <input 
                className={styles.pesquisaInput}
                value={props.value} 
                placeholder="Encontre aqui"
                onChange={(e) => props.onChange(e)}
            />
            <button
                className={styles.botaoPesquisa}
                onClick={props.onClick}
            >
                <i className='bx bx-search-alt'></i>
            </button>
        </div>
    )
}

function Cards(props: {
    posts: any[]
}): JSX.Element {

    const listaDeCards = props.posts.map((post, index) => {
        return (
            <Card 
                autor={post.blog.nome}
                cliques={post.cliques}
                data={post.dataPublicacao}
                titulo={post.titulo}
                thumbnailUrl={post.thumbnail}
                postUrl={post.url}
                key={index}
            />
        )
    })
        
    return (
        <div
            className={styles.cardsDiv}
        > 
            {listaDeCards} 
        </div>
    )
}

function CarregarMaisBotao(props: {
    onClick: () => void
}) {
    return (
        <button
            className={styles.carragarMais}
            onClick={props.onClick}
        >
            Carregue mais!
        </button>
    )
}