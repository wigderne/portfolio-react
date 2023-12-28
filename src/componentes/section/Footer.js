import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/wigder_neto/'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/wigderne'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/wigder-monteiro-neto/'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>wigderne@gmail.com</p>
            <p>Wigder Monteiro Neto © Copyright 2023</p>
        </div>

    )
}

export default Footer