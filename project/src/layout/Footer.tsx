//Layout
import styles from "./Footer.module.css"
import Container from "./Container"

//React Icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerContacts}>
                    <div className={styles.footerContactsText}>
                        <p>Promoção da garantia de direitos humanos e sociais, fortalecendo o protagonismo e a cidadania desde 2002.</p>
                        <p>Conheça o nosso trabalho e fale conosco:</p>
                    </div>
                    <div className={styles.footerDivSocialIcons}>
                        <ul className={styles.footerUlSocialIcons}>
                            <li className={styles.footerLiSocialIcons}>
                                <a href="https://www.instagram.com/osc_sempremulher/" target="_blank"><FaInstagram /></a>
                            </li>
                            <li className={styles.footerLiSocialIcons}>
                                <a href="https://www.facebook.com/pages/Sempre%20Mulher%20Instituto%20de%20Pesquisa%20e%20Interven%C3%A7%C3%A3o%20sobre%20Rela%C3%A7%C3%B5es%20Raciais/151692248231483/" target="_blank"><FaFacebook /></a>
                            </li>
                            <li className={styles.footerLiSocialIcons}>
                                <a href="https://www.youtube.com/@oscsempremulher9716" target="_blank"><FaYoutube /></a>
                            </li>
                            <li className={styles.footerLiSocialIcons}>
                                <a href="https://api.whatsapp.com/message/M7I3XT44G4HYI1?autoload=1&app_absent=0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcARV4iZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac21HNlosfMXgvNEX0-aUgigkmBQrb6F-FMGyNrkTBFQiqBgqu3XEJ9PWJXjQ_aem_4zbIJI8RRExDFyIPxSE9XA" target="_blank"><FaWhatsapp /></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerContactsText}>
                        <p><strong>+55 (51) 33449591</strong></p>
                        <p>R. Xavier de Carvalho, 80 - Sarandi, Porto Alegre - RS, 91110-440</p>
                    </div>
                    <div className={styles.subFooter}>
                        <p>
                            © 2026 - Sempre Mulher Instituto de Pesquisa e Intervenção Sobre Relações Raciais. Desenvolvido por Murillo Horvath
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer