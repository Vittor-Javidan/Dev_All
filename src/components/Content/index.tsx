import API from "@/APICalls"
import { APIPostsData } from "@/APICalls/dataTypes"
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from "react"
import Card from "../Card"
import usePrimeirasPublicacoes from "./hooks"
import styles from './styles.module.css'


export function Content() {

    const [maintenance, setMaintenance] = useState<boolean>(false)
    const [publicacoes, setPublicacoes] = useState<APIPostsData>([])
    const [textoPesquisa, setTextoPesquisa] = useState<string>("")
    const [pagina, setPagina] = useState<number>(1)

    usePrimeirasPublicacoes((posts) => {
        if(posts) {
            setPublicacoes(posts)
            setPagina(prev => prev + 1)
            setMaintenance(false)
        } else {
            setMaintenance(true)
        }
    })

    function pesquisar() {
        API.get_SearchPosts((responseData) => {
            if(responseData) {
                setPublicacoes(responseData)
                setMaintenance(false)
                setPagina(1)
            } else {
                setMaintenance(true)
            }
        }, textoPesquisa)
    }

    function carregarMais() {
        API.get_PagePosts((responseData) => {
            if(responseData) {
                setPublicacoes(prev => [...prev, ...responseData])
                setPagina(prev => prev + 1)
                setMaintenance(false)
            } else {
                setMaintenance(true)
            }
        }, pagina)
    }

    return (
        <div className={styles.div}>
            <BarraPesquisa
                value={textoPesquisa}
                onChange={(e) => setTextoPesquisa(e.target.value)}
                onButtonClick={pesquisar}
                onEnter={pesquisar}
            />
            <Maintenance 
                maintenance={maintenance}
            />
            <Cards 
                publicacoes={publicacoes}
            />
            <CarregarMaisBotao
                onClick={carregarMais}
            />
        </div>
    )
}

function Maintenance(props: { maintenance: boolean }) {
    return (<>
        {props.maintenance && (
            <h1
                className={styles.h1}
            >
                Servidores em manutenção. Voltaremos em breve!
            </h1>
        )}
    </>)
}

function BarraPesquisa(
    props: {
        value: string
        onChange: ChangeEventHandler<HTMLInputElement>
        onButtonClick: MouseEventHandler<HTMLButtonElement>
        onEnter: KeyboardEventHandler<HTMLInputElement>
    }
) {

    function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        console.log(e.key)
        if (e.key === 'Enter') {
            props.onEnter(e);
        }
    }

    return (
        <div
            className={styles.pesquisaDiv}
        >
            <input 
                className={styles.pesquisaInput}
                value={props.value} 
                placeholder="Encontre aqui"
                onChange={(e) => props.onChange(e)}
                onKeyDown={onEnter}
            />
            <button
                className={styles.botaoPesquisa}
                onClick={props.onButtonClick}
            >
                <i className='bx bx-search-alt'></i>
            </button>
        </div>
    )
}

function Cards(props: {
    publicacoes: APIPostsData
}): JSX.Element {

    const listaDeCards = props.publicacoes.map((post, index) => {
        if(props.publicacoes.length > 0) {
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
            {listaDeCards.length > 0 && listaDeCards} 
        </div>
    )
}

function CarregarMaisBotao(props: {
    onClick: MouseEventHandler<HTMLButtonElement>
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