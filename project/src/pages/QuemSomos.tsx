import styles from './QuemSomos.module.css'
import logoCompleta from '/logoNovaTransparente.svg'
import Container from '../layout/Container'


function QuemSomos(){
    return (
        <Container>
                <div className={styles.divQuemSomos}>
                    <div className={styles.quemSomosText}>
                        <h1>Sempre Mulher</h1>
                        <p>
                            <strong>Instituto de Pesquisa e Intervenção sobre Relações Raciais</strong>
                        </p>
                        <p>
                            é uma organização da sociedade civil com mais de duas décadas de atuação, 
                            localizada na zona norte de Porto Alegre/RS.
                        </p>
                        <p>
                            Nossa trajetória é marcada pelo compromisso com a transformação social,
                            a defesa de direitos e o fortalecimento de comunidades em situação de vulnerabilidade.
                        </p>
                    </div>
                    <div className={styles.quemSomosImg}>
                        <img src={logoCompleta} alt="Logo Completa do Sempre Mulher" className={styles.imgLogoCompleta} />
                    </div>
                </div>  
                <div className={styles.divNossaHistoria}>
                    <h2>Nossa História</h2>
                    <p>
                        O Instituto foi fundado em 05 de abril de 2002, a partir da iniciativa de mulheres já engajadas em ações sociais 
                        e comunitárias na região norte. Entre elas, profissionais da assistência social, ex-conselheiras tutelares e lideranças comunitárias.
                    </p>
                    <p>
                        A criação da organização surgiu da percepção de que era necessário um trabalho na política de assistência social 
                        que fosse além das práticas existentes. Desde o início, o foco esteve no acompanhamento das famílias de forma mais próxima e 
                        individualizada, promovendo não apenas o atendimento imediato, mas também a construção da cidadania e a defesa de direitos.
                    </p>
                    <p>
                        Ao longo dos anos, o Instituto consolidou sua atuação com projetos voltados principalmente para mulheres, 
                        especialmente mulheres negras, fortalecendo vínculos, ampliando oportunidades e contribuindo para a equidade social.
                    </p>
                </div>
                <div className={styles.divMissao}>
                    <div className={styles.divMissaoText}>
                        <h2>Missão</h2>
                        <p>Promover a garantia dos direitos humanos e sociais, com atuação prioritária junto à população negra em situação de vulnerabilidade.</p>
                    </div>
                    <div className={styles.divMissaoLinkYoutube}>
                         <iframe
                            src='https://www.youtube.com/embed/NqthrBBasUM'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                         />
                    </div>
               </div>
                <div className={styles.divValores}>
                    <h2>Valores</h2>
                    <ul>    
                        <li>Acolhimento com sensibilidade</li>   
                        <li>Compromisso com a transparência</li>
                        <li>Motivação e fortalecimento de vínculos</li>
                        <li>Valorização da cultura afrodescendente</li>
                        <li>Empoderamento de mulheres, especialmente mulheres negras</li>
                    </ul>
                </div>
        </Container>
    )
}

export default QuemSomos