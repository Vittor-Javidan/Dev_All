import { useState } from 'react'
import styles from './styles.module.css'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>/dev/All</h1>
            <label 
                className={styles.label}
                onClick={() => setToggle(prev => !prev)}
            >
                <i 
                    className={`
                        bx bx-menu
                        ${styles.i}
                    `}
                ></i>
            </label>
            <ul className={`
                ${styles.ul}
                ${!toggle && styles.ulDisable}
            `}>
                <li 
                    className={`
                        ${styles.li}
                        ${styles.discord}
                    `}
                >
                    DISCORD
                </li>
                <li 
                    className={`
                        ${styles.li}
                        ${styles.taverna}
                    `}
                >
                    TAVERNA
                </li>
                <li className={styles.li}>REVISTA</li>
                <li className={styles.li}>BLOGS</li>
                <li className={styles.li}>SOBRE</li>
                <li className={styles.li}>CADASTRE-SE!</li>
                <li className={styles.li}>ENTRAR</li>
            </ul>
        </div>
    )
}