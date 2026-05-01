import Container from '../layout/Container'
import styles from './NossoTrabalho.module.css'

function NossoTrabalho(){
    return (
        <Container>
            <p className='fraseImpacto'>
                “Trabalhamos diariamente para fortalecer famílias, garantir direitos e promover dignidade.”
            </p>
            <div className={styles.sessionNossoTrabalho}>
                <h1>Nosso Trabalho</h1>
                <p>
                    O Sempre Mulher desenvolve ações voltadas à proteção social básica, 
                    com foco no fortalecimento de vínculos familiares e comunitários, 
                    na promoção da cidadania e na garantia de direitos, 
                    especialmente para mulheres em situação de vulnerabilidade.
                </p>
            </div>
            <div className={styles.sessionServicosExistentes}>
                <h2>Serviços Existentes</h2>
                <div className={styles.divServicosExistentes}>  
                    <div>
                        <h3>OSC Sempre Mulher</h3>
                        <p>
                            A organização atua em regime de mútua cooperação com a administração pública municipal, 
                            por meio da Secretaria Municipal de Assistência Social (SMAS) de Porto Alegre, 
                            contribuindo para a execução da Política Nacional de Assistência Social (PNAS) 
                            e da Proteção Social Básica (PSB) no território.
                        </p>
                    </div>
                    <div>
                        <h3>SAF – Serviço de Atendimento Familiar</h3>
                        <p>
                            O Serviço de Atendimento Familiar (SAF) é executado desde 2011 e está referenciado ao 
                            CRAS (Centro de Referência de Assistência Social) da Região Norte.
                        </p>
                        <p>
                            O serviço tem como objetivo acompanhar famílias de forma continuada, promovendo o fortalecimento de vínculos e o acesso a direitos.
                        </p>
                    </div>
                </div>
                <div className={styles.cardsEquipeTecnica}> 
                    <p>Equipe técnica:</p>
                    <ul>
                        <li>Assistente social</li>
                        <li>Psicólogo(a) social</li>
                        <li>Assistente administrativo</li>
                    </ul>
                </div>
            </div>
            <div className={styles.sessionOutrosServicos}>
                <h2>Outros Serviços</h2>
                <div className={styles.divBrechoSolidario}>
                    <div className={styles.textBrechoSolidario}>
                        <h3>Brechó Solidário</h3>
                        <p>
                        O brechó é a principal fonte de recursos próprios da instituição, 
                        contribuindo diretamente para a manutenção das atividades.
                        </p>
                        <h3>Varal Solidário</h3>
                        <p>A ação do Varal Solidário realiza a doação de roupas, calçados e outros itens para famílias em situação de vulnerabilidade.</p>
                        <p>O acesso ocorre por meio de encaminhamento da rede socioassistencial, garantindo que os itens cheguem a quem mais precisa.</p>
                    </div>
                    <div className={styles.cardsRoupasNovasSemi}>
                        <p>São comercializadas roupas novas e seminovas:</p>
                        <ul>
                            <li>Peças novas provenientes de parceria com o Instituto C&A (desde 2021)</li>
                            <li>Peças seminovas oriundas de doações de pessoas físicas e jurídicas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default NossoTrabalho