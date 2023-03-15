import { fazerFetchMaisPosts } from "@/APICalls/fazerFetchMaisPosts"
import { fazerFetchPosts } from "@/APICalls/fazerFetchPosts"
import { APIDataPublicacoes } from "@/types/APIdataType"
import { useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'

export function Content() {

    const [publicacoes, setPublicacoes] = useState<APIDataPublicacoes>([])
    const [pesquisa, setPesquisa] = useState("")
    const [contadorPaginas, setContadorPaginas] = useState(1)

    useEffect(() => {
        fazerFetchPosts(
            setPublicacoes, 
            setContadorPaginas,
            contadorPaginas
        )
    }, [])

    return (
        <div className={styles.div}>
            <BarraPesquisa
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
            <Cards 
                pesquisa={pesquisa}
                posts={publicacoes}
            />
            <CarregarMaisBotao
                onClick={() => fazerFetchMaisPosts(
                    setPublicacoes, 
                    setContadorPaginas, 
                    contadorPaginas
                )}
            />
        </div>
    )
}

function BarraPesquisa(
    props: {
        value: string
        onChange: (e: any) => void
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
        </div>
    )
}

function Cards(props: {
    pesquisa: string
    posts: any[]
}): JSX.Element {

    const listaDeCards = props.posts.map((post, index) => {
        if(post.titulo.includes(props.pesquisa)) {
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
        }
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