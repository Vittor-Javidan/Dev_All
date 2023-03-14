import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'


//TODO: definir o tipo do setPosts, para fazer o typescript para de reclamar
async function fazerFetchPosts(setPosts: Dispatch<SetStateAction<any>>, page: number) {
    const postsResponse = await fetch(`https://api.devall.com.br/api/v1/post?page=${page}`)
    const postsArray = await postsResponse.json()
    setPosts(postsArray)
}

//TODO: definir o tipo do setPosts, para fazer o typescript para de reclamar
async function fazerFetchMaisPosts(setPosts: Dispatch<SetStateAction<any[]>>, page: number) {
    const postsResponse = await fetch(`https://api.devall.com.br/api/v1/post?page=${page}`)
    const postsArray = await postsResponse.json()
    setPosts(prev => [...prev, ...postsArray])
}

export function Content() {

    const [posts, setPosts] = useState([])
    const [pesquisa, setPesquisa] = useState("")

    useEffect(() => {
        fazerFetchPosts(setPosts, 1)
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
                {/*
                    //TODO: Fazer com que a pesquise so ative ao apertar o botão de pesquisa, ao invés de deixar o componente controlado
                    <button
                        className={styles.pesquisaButton}
                    >
                        <i className='bx bx-search-alt' ></i>
                    </button>
                */}
            </div>
            <Cards 
                pesquisa={pesquisa}
                posts={posts}
            />
            {/*
                //TODO: Adicionar um botão para fazer fetch de mais dados.
            */}
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