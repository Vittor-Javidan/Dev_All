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
                <h1 className={styles.autor}>
                    {props.autor}
                </h1>
                {props.thumbnailUrl !== null 
                    ? (
                        <img
                            className={styles.img} 
                            src={props.thumbnailUrl} 
                            alt="thumbnail" 
                        />
                    )
                    : (
                        <div
                            className={styles.noImg}
                        >
                            <h1
                                className={styles.noImgText}
                            >
                                Imagem não disponível                             
                            </h1>
                        </div>
                    )
                }
                <h2
                    className={styles.titulo}
                >
                    {props.titulo}</h2>
                <div
                    className={styles.estatistica}
                >
                    <h3
                        className={styles.h3}
                    >
                        publicado em {props.data}
                    </h3>
                    <h3
                        className={styles.h3}
                    >
                        cliques: {props.cliques}
                    </h3>
                </div>
            </a>
        </div>
    )
}