import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"
import styles from "./ScrollToTopButton.module.css"

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            className={`${styles.scrollTopButton} ${visible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTopButton
