import Container from '../layout/Container'
import styles from './Transparencia.module.css'
import { FaFileDownload, FaHandHoldingUsd, FaBuilding, FaTshirt, FaLandmark } from 'react-icons/fa'

/**
 * ATENÇÃO: os percentuais de "Como Usamos os Recursos" e os documentos listados em
 * "Prestação de Contas" são ilustrativos (placeholders). Substitua pelos valores e
 * arquivos reais da instituição assim que estiverem disponíveis.
 */
const usoDosRecursos = [
    { categoria: 'Equipe técnica e atendimento às famílias', percentual: 45 },
    { categoria: 'Oficinas, cursos e atividades socioeducativas', percentual: 20 },
    { categoria: 'Manutenção da sede e infraestrutura', percentual: 15 },
    { categoria: 'Materiais, insumos e doações repassadas', percentual: 12 },
    { categoria: 'Administração e gestão institucional', percentual: 8 },
]

const documentos = [
    { titulo: 'Relatório Anual de Atividades', ano: '2025', href: '#' },
    { titulo: 'Balanço Patrimonial e Demonstrações Contábeis', ano: '2025', href: '#' },
    { titulo: 'Prestação de Contas – Parceria SMAS', ano: '2025', href: '#' },
]

function Transparencia(){
    return (
        <Container>
            <p className='fraseImpacto'>
                “Transparência é o que sustenta a confiança de quem acredita no nosso trabalho.”
            </p>
            <div className={`${styles.sessionTransparencia} fadeInUp`}>
                <h1>Transparência</h1>
                <p>
                    O Sempre Mulher preza pela gestão responsável e transparente dos recursos públicos e privados
                    recebidos, garantindo que cada real investido contribua diretamente para o fortalecimento das
                    famílias atendidas e para a continuidade dos nossos projetos.
                </p>
            </div>

            <div className={styles.sessionRecursos}>
                <h2>Como Usamos os Recursos</h2>
                <p className={styles.recursosIntro}>
                    Distribuição percentual estimada dos recursos aplicados nas atividades da instituição
                    (dados de referência — atualizados anualmente).
                </p>
                <div className={styles.barrasWrapper}>
                    {usoDosRecursos.map((item) => (
                        <div className={styles.barraItem} key={item.categoria}>
                            <div className={styles.barraLabel}>
                                <span>{item.categoria}</span>
                                <span className={styles.barraPercentual}>{item.percentual}%</span>
                            </div>
                            <div className={styles.barraFundo}>
                                <div
                                    className={styles.barraPreenchida}
                                    style={{ width: `${item.percentual}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sessionFontes}>
                <h2>Fontes de Recursos</h2>
                <div className={styles.sessionCards}>
                    <div className={styles.card}>
                        <FaLandmark className={styles.cardIcon} />
                        <h3 className={styles.cardTitulo}>Parceria com a SMAS</h3>
                        <p className={styles.cardDesc}>
                            Regime de mútua cooperação com a Secretaria Municipal de Assistência Social de
                            Porto Alegre, para execução da Proteção Social Básica.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <FaHandHoldingUsd className={styles.cardIcon} />
                        <h3 className={styles.cardTitulo}>Doações</h3>
                        <p className={styles.cardDesc}>
                            Contribuições de pessoas físicas e jurídicas, em recursos, roupas, materiais e serviços.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <FaTshirt className={styles.cardIcon} />
                        <h3 className={styles.cardTitulo}>Brechó Ago Moda</h3>
                        <p className={styles.cardDesc}>
                            Principal fonte de recursos próprios, gerada pela venda de peças novas e seminovas.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <FaBuilding className={styles.cardIcon} />
                        <h3 className={styles.cardTitulo}>Parcerias Institucionais</h3>
                        <p className={styles.cardDesc}>
                            Editais, convênios e parcerias com empresas e organizações, como o Instituto C&amp;A.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.sessionDocumentos}>
                <h2>Prestação de Contas</h2>
                <p className={styles.documentosIntro}>
                    Documentos institucionais disponíveis para consulta. Em breve, os arquivos completos estarão
                    disponíveis para download nesta página.
                </p>
                <ul className={styles.listaDocumentos}>
                    {documentos.map((doc) => (
                        <li className={styles.documentoItem} key={doc.titulo}>
                            <div className={styles.documentoInfo}>
                                <span className={styles.documentoTitulo}>{doc.titulo}</span>
                                <span className={styles.documentoAno}>{doc.ano}</span>
                            </div>
                            <a href={doc.href} className={styles.documentoLink} aria-label={`Baixar ${doc.titulo}`}>
                                <FaFileDownload />
                                Baixar
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.sessionContato}>
                <h2>Dúvidas sobre a Gestão Financeira?</h2>
                <p>Fale com a nossa equipe:</p>
                <p><strong>+55 (51) 998712541</strong></p>
                <p>R. Xavier de Carvalho, 80 - Sarandi, Porto Alegre - RS, 91110-440</p>
            </div>
        </Container>
    )
}

export default Transparencia
