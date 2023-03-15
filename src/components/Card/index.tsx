 import { ReactNode } from 'react'
import styles from './styles.module.css'

export default function Card(props: {
    autor: string
    thumbnailUrl: string | null
    postUrl: string
    titulo: string
    data: string
    cliques: string
}) {
    return (
        <div className={styles.card}>
            <a 
                tabIndex={0}
                className={styles.a}
                onClick={() => alert(`post sem url, imagine um redirecionamento de página para "${props.autor}"`)}
            >
                <Autor>
                    {props.autor}
                </Autor>
                <Thumbnail
                    thumbnailUrl={props.thumbnailUrl}
                />
                <Titulo>
                    {props.titulo}
                </Titulo>
                <AreaEstatistica>
                    <DataPublicacao>
                        {props.data}
                    </DataPublicacao>
                    <Cliques>
                        {props.cliques}
                    </Cliques>
                </AreaEstatistica>
            </a>
        </div>
    )
}

function Autor(props: {children: ReactNode}) {
    return (
        <h1 className={styles.autor}>
            {props.children}
        </h1>
    )
}

function Thumbnail(props: {thumbnailUrl: string | null,}) {
    return (<>
        {props.thumbnailUrl !== null 
            ? (
                <img
                    className={styles.thumbnail} 
                    src={props.thumbnailUrl} 
                    alt="thumbnail" 
                />
            )
            : (
                <div
                    className={styles.noThumbnail}
                >
                    <h1
                        className={styles.noThumbnailText}
                    >
                        Imagem não disponível                             
                    </h1>
                </div>
            )
        }
    </>)
}

function Titulo(props: {children: ReactNode}) {
    return (
        <h2
            className={styles.titulo}
        >
            {props.children}
        </h2>
    )
}

function AreaEstatistica(props: {children: ReactNode}) {
    return (
        <div
            className={styles.estatistica}
        >
            {props.children}
        </div>
    )
}

function DataPublicacao(props: {children: ReactNode}) {
    return (
        <h3
            className={styles.h3}
        >
            publicado em {props.children}
        </h3>
    )
}

function Cliques(props: {children: ReactNode}) {
    return (
        <h3
            className={styles.h3}
        >
            cliques: {props.children}
        </h3>
    )
}