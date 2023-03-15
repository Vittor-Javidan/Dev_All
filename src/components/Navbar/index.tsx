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
                    <a 
                        className={styles.a} 
                        href=""
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
                    <a 
                        className={styles.a}
                    >
                        <li className={styles.li}>
                                REVISTA
                        </li>
                    </a>
                    <a 
                        className={styles.a}
                    >
                        <li className={styles.li}>
                                BLOGS
                        </li>
                    </a>
                    <a 
                        className={styles.a}
                    >
                        <li className={styles.li}>
                                SOBRE
                        </li>
                    </a>
                    <a 
                        className={styles.a}
                    >
                        <li className={styles.li}>
                                CADASTRE-SE!
                        </li>
                    </a>
                    <a 
                        className={styles.a}
                    >
                        <li className={styles.li}>
                                ENTRAR
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}