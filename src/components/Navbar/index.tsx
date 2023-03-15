import { useState } from 'react'
import styles from './styles.module.css'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.fakeBackground}>
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
                        className={styles.li}
                    >
                        <a 
                            className={`
                                ${styles.a}
                                ${styles.discord}
                            `} 
                            href="https://discord.com/invite/JyXzTcP"
                            target={"_blank"}
                        >
                            DISCORD
                        </a>
                    </li>
                    <li 
                        className={styles.li}
                    >
                        <a 
                            className={`
                                ${styles.a}
                                ${styles.taverna}
                            `} 
                            href=""
                        >
                            TAVERNA
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a 
                            className={styles.a}
                        >
                            REVISTA
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a 
                            className={styles.a}
                        >
                            BLOGS
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a 
                            className={styles.a}
                        >
                            SOBRE
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a 
                            className={styles.a}
                        >
                            CADASTRE-SE!
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a 
                            className={styles.a}
                        >
                            ENTRAR
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}