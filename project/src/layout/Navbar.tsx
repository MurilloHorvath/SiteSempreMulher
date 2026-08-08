//Libs React
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

//Layout
import Container from "./Container"
import styles from "./Navbar.module.css"

//Logos
import logo from "/logoNovaIcon.svg"
import logoAGO from "/logoAgoNova.png"


function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    };
    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 12);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <Container>
                    <img src={logo} alt="Logo Sempre Mulher" className={styles.logo} />
                    <div className={styles.divMenu}>
                        <button className={`${styles.menuButton} 
                        ${sidebarOpen ? styles.active : ''}`} 
                        onClick={toggleSidebar} aria-label="Abrir menu">
                            <span className={styles.menuIcon} />
                            <span className={styles.menuIcon} />
                            <span className={styles.menuIcon} />
                        </button>
                        <ul className={styles.desktopMenu}>
                            <li className={styles.item}><Link to="/QuemSomos">QUEM SOMOS</Link></li>
                            <li className={styles.item}><Link to="/NossoTrabalho">NOSSO TRABALHO</Link></li>
                            <li className={styles.item}><Link to="/InformeSe">INFORME-SE</Link></li>
                            <li className={styles.item}><Link to="/ComoAjudar">COMO AJUDAR</Link></li>
                            <li className={styles.item}><Link to="/Transparencia">TRANSPARÊNCIA</Link></li>
                        </ul>
                    </div>
                    <div className={styles.divAgo}>
                        <Link to="/AgoModaHome" className={styles.linkAgo}>
                            <img src={logoAGO} alt="Logo Ago Moda" className={styles.imgAgo} />
                        </Link>                        
                    </div>
                </Container>
            </nav>
            <div className={`${styles.sidebarOverlay} ${sidebarOpen ? styles.active : ''}`} onClick={closeSidebar} />
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
                <div className={styles.sidebarHeader}>
                    <button className={styles.closeButton} onClick={closeSidebar} aria-label="Fechar menu">
                        X
                    </button>
                </div>
                <div className={styles.sidebarContent}>
                    <ul className={styles.sidebarMenu}>
                        <li className={styles.sidebarItem}>
                            <Link to="/QuemSomos" onClick={closeSidebar}>QUEM SOMOS</Link>
                        </li>
                        <li className={styles.sidebarItem}>
                            <Link to="/NossoTrabalho" onClick={closeSidebar}>NOSSO TRABALHO</Link>
                        </li>
                        <li className={styles.sidebarItem}>
                            <Link to="/InformeSe" onClick={closeSidebar}>INFORME-SE</Link>
                        </li>
                        <li className={styles.sidebarItem}>
                            <Link to="/ComoAjudar" onClick={closeSidebar}>COMO AJUDAR</Link>
                        </li>
                        <li className={styles.sidebarItem}>
                            <Link to="/Transparencia" onClick={closeSidebar}>TRANSPARÊNCIA</Link>
                        </li>
                    </ul>
                    <div className={styles.sidebarDivAgo}>
                        <Link to="/AgoModaHome" className={styles.sidebarLinkAgo} onClick={closeSidebar}>
                            <img src={logoAGO} alt="Logo Ago Moda" className={styles.sidebarImgAgo} />
                        </Link>                        
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Navbar
