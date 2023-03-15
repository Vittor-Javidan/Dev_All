import { APIDataPublicacoes } from "@/types/APIdataType"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'


//TODO: definir o tipo do setPosts, para fazer o typescript para de reclamar
async function fazerFetchPosts(
    setPosts: Dispatch<SetStateAction<APIDataPublicacoes>>, 
    setContador: Dispatch<SetStateAction<number>>, 
    page: number
) {
    const postsResponse = await fetch(`https://api.devall.com.br/api/v1/post?page=${page}`)
    const postsArray = await postsResponse.json()
    setPosts(postsArray)
    setContador(prev => prev + 1)
}

//TODO: definir o tipo do setPosts, para fazer o typescript para de reclamar
async function fazerFetchMaisPosts(
    setPosts: Dispatch<SetStateAction<APIDataPublicacoes>>, 
    setContador: Dispatch<SetStateAction<number>>, 
    page: number
) {
    const postsResponse = await fetch(`https://api.devall.com.br/api/v1/post?page=${page}`)
    const postsArray = await postsResponse.json()
    setPosts(prev => [...prev, ...postsArray])
    setContador(prev => prev + 1)
}

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
            <div
                className={styles.pesquisaDiv}
            >
                <input 
                    className={styles.pesquisaInput}
                    value={pesquisa} 
                    placeholder="Encontre aqui"
                    onChange={(e) => 
                        console.log(setPesquisa(e.target.value))
                    }
                />
            </div>
            <Cards 
                pesquisa={pesquisa}
                posts={publicacoes}
            />
            {/*
                //TODO: Adicionar um botão para fazer fetch de mais dados.
            */}
            <button
                className={styles.carragarMais}
                onClick={() => fazerFetchMaisPosts(
                    setPublicacoes, 
                    setContadorPaginas, 
                    contadorPaginas
                )}
            >
                Carregue mais!
            </button>
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