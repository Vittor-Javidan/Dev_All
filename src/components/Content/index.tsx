import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'

async function useFetchPost(setPosts: Dispatch<SetStateAction<any>>) {
    const postsResponse = await fetch("https://api.devall.com.br/api/v1/post")
    const postsArray = await postsResponse.json()
    setPosts(postsArray)
}

export function Content() {

    const [posts, setPosts] = useState([])
    const [pesquisa, setPesquisa] = useState("")

    useEffect(() => {
        useFetchPost(setPosts)
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
                <button
                    className={styles.pesquisaButton}
                >
                    <i className='bx bx-search-alt' ></i>
                </button>
            </div>
            <Cards 
                pesquisa={pesquisa}
                posts={posts}
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