import Container from '../layout/Container'
import styles from './ComoAjudar.module.css'
import { Link } from "react-router-dom"


function ComoAjudar(){
    return (
        <Container>
            <p className='fraseImpacto'>“Pequenas ações geram grandes transformações.”</p>
            <div className={styles.sessionComoAjudar}>
                <h1>Como Ajudar</h1>
                <p>
                    Existem diversas formas de apoiar o Sempre Mulher e contribuir com a transformação de vidas. 
                    Sua participação fortalece nossas ações e ajuda a ampliar o alcance dos nossos projetos.
                </p>
            </div>
            <div className={styles.sessionFormasDeAjudar}>
                <h2>Formas de Ajudar</h2>
                <div className={styles.sessionCards}> 
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Doação de Roupas</h3>
                        <p className={styles.cardDesc}>
                            Contribua com peças novas ou seminovas que serão destinadas ao Varal Solidário ou ao brechó da instituição.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Roupas adultas e infantis</li>
                            <li className={styles.listItem}>Calçados em bom estado</li>
                            <li className={styles.listItem}>Peças higienizadas</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Doação de Livros</h3>
                        <p className={styles.cardDesc}>
                            Livros ajudam a promover educação e acesso à informação.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Literatura infantil</li>
                            <li className={styles.listItem}>Didáticos</li>
                            <li className={styles.listItem}>Livros em bom estado</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Material Escolar</h3>
                        <p className={styles.cardDesc}>
                            Apoie crianças e adolescentes com itens essenciais para os estudos:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Cadernos</li>
                            <li className={styles.listItem}>Mochilas</li>
                            <li className={styles.listItem}>Lápis, canetas, etc.</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Doação de Tampinhas</h3>
                        <p className={styles.cardDesc}>
                            As tampinhas são utilizadas em ações de arrecadação e contribuem com a sustentabilidade e geração de recursos.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Apoie o Brechó <br /> Ago Moda</h3>
                        <p className={styles.cardDesc}>
                            Você também pode ajudar consumindo de forma consciente. <br /> Ao comprar no brechó, você:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Apoia diretamente a instituição</li>
                            <li className={styles.listItem}>Incentiva a economia circular</li>
                            <li className={styles.listItem}>Contribui para a continuidade dos projetos</li>
                        </ul>
                        <Link to="/AgoModaHome">
                                <p className={styles.linkAgo}>Visite a loja e conheça as peças disponíveis</p>
                        </Link>  
                    </div>
                </div>
            </div>
            <div className={styles.sessionComoEntregar}>
                <h2>Como Entregar as Doações</h2>
                <p>As doações podem ser entregues diretamente na instituição.</p>
                <p>📍 Local: R. Xavier de Carvalho, 80 - Sarandi, Porto Alegre - RS, 91110-440</p>
                <p>🕒 Horário:</p>
                <p>📞 Contato: +55 (51) 998712541</p>
            </div>
            <div className={styles.sessionFormasDeAjudar}>
                <h2>Outras Formas de Apoiar</h2>
                <div className={styles.sessionCards}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Divulgação nas redes sociais</h3>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Indicação para outras pessoas</h3>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitulo}>Parcerias institucionais</h3>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ComoAjudar