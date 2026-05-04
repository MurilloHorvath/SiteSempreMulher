import Container from '../layout/Container'
import styles from './InformeSe.module.css'


/**
copiar a div sessionContent para Adicionar mais conteudos informativos
*/

function InformeSe(){
    return (
        <Container>
            <p className='fraseImpacto'>“Informação também é uma forma de fortalecer direitos.”</p>
            <div className={styles.sessionInformeSe}>
                <h1>Informe-Se</h1>
                <p>
                    Acompanhe notícias, ações, eventos e conteúdos produzidos pelo Sempre Mulher. 
                    Este é um espaço de informação, conscientização e conexão com a comunidade.                
                </p>
            </div>
            <div className={styles.session}>
                <div className={styles.sessionContent}>
                    <img src="" alt="" className={styles.img} />
                    <div className={styles.sessionText}>
                        <h2 className={styles.header}>Seminário</h2>
                        <h3 className={styles.titulo}>Diálogos Sobre Violência de Gênero e Raça</h3>
                        <p className={styles.descricao}>
                            Seminário sobre a naturalização da violência, também sobre a construção da masculinidade, 
                            como construímos e pensamos no mundo em que os homens estão cada vez mais violentos e, 
                            ao mesmo tempo, sendo alvos.
                        </p>
                        <a href="https://www.instagram.com/reel/DW4UdjIjtQY/?utm_source=ig_web_button_share_sheet" className={styles.saibaMais}>Saiba Mais</a>
                        <p className={styles.data}>08/04/2026</p>
                    </div>
                </div>
                <div className={styles.sessionContent}>
                    <img src="" alt="" className={styles.img} />
                    <div className={styles.sessionText}>
                        <h2 className={styles.header}>Aniversário</h2>
                        <h3 className={styles.titulo}>Aniversário 24 Anos O Sempre Mulher</h3>
                        <p className={styles.descricao}>
                            Dia 05 de Abril de 2002, datade fundação da nossa organização, portanto hoje completamos,
                            24 anos deexistência, resistência e resiliência.
                        </p>
                        <a href="https://www.instagram.com/p/DWw3pERFD-7/?utm_source=ig_web_button_share_sheet" className={styles.saibaMais}>Saiba Mais</a>
                        <p className={styles.data}>05/04/2026</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default InformeSe