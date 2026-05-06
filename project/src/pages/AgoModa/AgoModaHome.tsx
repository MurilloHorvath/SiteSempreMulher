import Container from '../../layout/Container'
import styles from './AgoModaHome.module.css'

/** products */
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import product5 from '../../assets/product5.png'
import product6 from '../../assets/product6.png'
import product7 from '../../assets/product7.png'
import product8 from '../../assets/product8.png'
import product9 from '../../assets/product9.png'
import product10 from '../../assets/product10.png'
import product11 from '../../assets/product11.png'
import product12 from '../../assets/product12.png'
import product13 from '../../assets/product13.png'
import product14 from '../../assets/product14.png'

function AgoModaHome(){
    

    return (
        <Container>
            <p className='fraseImpacto'>
                “Mais do que vestir, é sobre representar histórias, identidades e transformação.”
            </p>
            <div className={styles.sessionAgo}>
                <h1>AGÔ MODA E ACESSÓRIOS</h1>
                <p>
                    Moda consciente, com propósito e representatividade.  
                </p>
            </div>
            <div className={styles.sessionHistoria}>
                <h2>Nossa História</h2>
                <div className={styles.sessionHistoriaText}>
                    <div className={styles.divSignificaAgo}>
                        <h3>O que significa Agô</h3>
                        <p>
                            “Agô”, do iorubá (àgò), é uma expressão que representa um pedido de licença, de passagem. 
                            Mais do que um nome, Agô é um posicionamento. <br />
                            Pedimos licença à nossa ancestralidade, reconhecendo suas raízes e saberes, 
                            com a certeza de que a representatividade é o caminho. <br />
                            Pedimos licença para ocupar espaços, inclusive o da moda, acreditando que só é possível construir um mercado mais justo, 
                            consciente e sustentável quando há diversidade e inclusão.
                        </p>
                    </div>
                    <div className={styles.divSobreBrecho}>
                        <h3>Sobre o Brechó</h3>
                        <p>O Ago Moda é o brechó do Sempre Mulher e uma das principais iniciativas de geração de recursos da instituição.</p>
                        <p>Aqui, cada peça carrega um propósito:</p>
                        <ul>
                            <li>Incentivar o consumo consciente</li>
                            <li>Promover a economia circular</li>
                            <li>Apoiar projetos sociais voltados a mulheres em situação de vulnerabilidade</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.sessionCatologo}>
                <h2>Catálogo de Peças</h2>
                <div className={styles.catalogo}>
                    <div className={styles.card}>
                        <img src={product1} alt="Ecobag Ago Moda" />
                        <div className={styles.cardText}>
                             <h3>Ecobag</h3>
                            <p>
                                Coleção Propósito e Sonhos <br />
                                Tecido Algodão Cru, Bordado e Pintura feita a mão. <br />
                                Medidas: 40cmX40cm <br />
                                Alça: 52cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product2} alt="Mochila Grande Ago Moda" />
                        <div className={styles.cardText}>
                            <h3>Mochila</h3>
                            <p>
                                Mochila Grande com tecido impermeável + ziper duplo. <br />
                                Medidas: 34cmX48cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product3} alt="" />
                        <div className={styles.cardText}>
                            <h3>Estojo</h3>
                            <p>
                                Tecidos Tricoline e Impermeável. <br />
                                Medidas: 24cmX7cmX7cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product4} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Rabicó Grande</h3>
                            <p>
                                Diversas cores.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product5} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Bolsa Retangular com Alça</h3>
                            <p>
                                Tamanho P, Tecido Impermeável.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product6} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Ecochila</h3>
                            <p>
                                Tecido Impermeável.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product7} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Mala de Mão</h3>
                            <p>
                                Tecido Impermeável, Cor Azul.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product8} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Mochila Grande</h3>
                            <p>
                                Tecido Jeans + Tecido Impermeável. <br />
                                Medidas: 34cmX48cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product9} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Polchete</h3>
                            <p>
                                Tecido Impermeável.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product10} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Turbante</h3>
                            <p>
                                Cobre a cabeça toda. <br />
                                Medidas 75cmX48cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product11} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Bolsa Retangular</h3>
                            <p>
                                Bolsa que vira Mochila, Com Alça Transversal. <br />
                                Tecido Sarja. <br />
                                Medidas: 40cmX40cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product12} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Polchete Ziper Duplo</h3>
                            <p>
                                Polchete com ziper duplo com regulador e Engate. <br />
                                Medidas: 23cmX12cm
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                    <div className={styles.card}>
                        <img src={product13} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Necessaire Retangular</h3>
                            <p>
                                Tecido Tricoline.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={product14} alt=""/>
                        <div className={styles.cardText}>
                            <h3>Combo Bolsa + Necessarie</h3>
                            <p>
                                Tecido Jeans + Retalho de Tecido Estampado Tricoline.
                            </p>
                            <a href="">Encomende já</a>
                        </div>
                    </div> 
                </div>
            </div>
        </Container>
    )
}

export default AgoModaHome