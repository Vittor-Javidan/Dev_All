import { useState } from 'react'
import styles from './styles.module.css'

export default function Navbar() {

    const [ativado, setAtivado] = useState(false)

    return (
        <div className={styles.backGroundFalso}>
            <div className={styles.div}>
                <NomeSite />
                <NavItemMobileIcon 
                    onClick={() => setAtivado(prev => !prev)}
                />
                <NavItems
                    ativado={ativado}
                />
            </div>
        </div>
    )
}

function NomeSite() {
    return <h1 className={styles.h1}>/dev/All</h1>
}

function NavItemMobileIcon(props: {
    onClick: () => void
}) {
    return (
        <label 
            className={styles.label}
            onClick={props.onClick}
        >
            <i 
                className={`
                    bx bx-menu
                    ${styles.i}
                `}
            ></i>
        </label>
    )
}

function NavItems(props: {
    ativado: boolean
}) {

    const normalNavItem = [
        "REVISTA",
        "BLOGS",
        "SOBRE",
        "CADASTRE-SE!",
        "ENTRAR"
    ]

    return (
        <ul className={`
            ${styles.ul}
            ${!props.ativado && styles.listaDesativada}
        `}>
            <DiscordNavItem />
            <TavernaNavItem />
            <NavItemRestante 
                dataArray={normalNavItem}
            />
        </ul>
    )
}

function DiscordNavItem() {
    return (
        <a 
            className={styles.a} 
            href="https://discord.com/invite/JyXzTcP"
            target={"_blank"}
        >
            <li 
                className={`
                    ${styles.li}
                    ${styles.discord}
                `}
            >
                    DISCORD
            </li>
        </a>
    )
}

function TavernaNavItem() {
    return (
        <a 
            className={styles.a} 
        >
            <li 
                className={`
                    ${styles.li}
                    ${styles.taverna}
                `}
            >
                    TAVERNA
            </li>
        </a>
    )
}

function NavItemRestante(props: {
    dataArray: string[]
}) {
    return (<>
        {props.dataArray.map(string => (
            <a 
                className={styles.a}
            >
                <li className={styles.li}>
                        {string}
                </li>
            </a>
        ))}
    </>)
}