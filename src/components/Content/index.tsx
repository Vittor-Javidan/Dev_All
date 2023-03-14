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

    useEffect(() => {
        useFetchPost(setPosts)
    }, [])

    return (
        <div className={styles.div}>
            <Cards 
                posts={posts}
            />
        </div>
    )
}

function Cards(props: {
    posts: any[]
}): JSX.Element {

    const cardsArray = props.posts.map((post, index) => (
        <Card 
            autor={post.blog.nome}
            cliques={post.cliques}
            data={post.dataPublicacao}
            titulo={post.titulo}
            thumbnailUrl={post.thumbnail}
            postUrl={post.url}
            key={index}
        />
    ))
        
    return (
        <div
            className={styles.cardsDiv}
        > 
            {cardsArray} 
        </div>
    )
}