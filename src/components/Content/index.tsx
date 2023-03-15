import devAllAPI from "@/APICalls/devAllAPI"
import { APIDataPublicacoes } from "@/types/APIdataType"
import { useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'

export function Content() {

    const [publicacoes, setPublicacoes] = useState<APIDataPublicacoes>([])
    const [pesquisa, setPesquisa] = useState("")
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        devAllAPI.fetch((posts) => setPublicacoes(posts))
        setPagina(prev => prev + 1)
    }, [])

    return (
        <div className={styles.div}>
            <BarraPesquisa
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                onClick={() => {
                    devAllAPI.fetchPesquisa(
                        (posts) => setPublicacoes(posts),
                        pesquisa, 
                    )
                    setPagina(1)
                }}
            />
            <Cards 
                posts={publicacoes}
            />
            <CarregarMaisBotao
                onClick={() => {
                    devAllAPI.fetch(
                        (posts) => setPublicacoes(prev => [...prev, ...posts]),
                        pagina
                    )
                    setPagina(prev => prev + 1)
                }}
            />
        </div>
    )
}

function BarraPesquisa(
    props: {
        value: string
        onChange: (e: any) => void
        onClick: () => void
    }
) {

    /*
        Aqui na barra pesquisa seria interessante se eu pudesse fazer uma call para a api,
        enviando as informações a serem pesquisadas, através de um outro fetch. Como não
        encontrei uma forma de fazer isso, prefiri deixar a barra de pesquisa sem botão,
        pois o componente já está como controlado.
    */

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