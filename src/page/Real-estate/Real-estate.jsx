import RealEstate from '../../assets/img/home-office2.jpg'
import style from './Real-estate.module.css'

const Real_estate = () => {
    return (
        <>
            <div className={style.MainTopics}>
                <div className={`${style.Topics} container`}>
                    <div>
                        <h2>
                            Imobiliárias
                        </h2>   
                    </div>

                    <div className={style.TopicsInfo}>
                        
                        <div>
                            <img src={RealEstate} alt="" />
                        </div>

                        <div className={style.TextArea}>
                            <h3>Imobiliárias</h3>
                            <h4>Custo zero para imobiliárias e corretores</h4>
                            <ul>
                                <li>Análise de crédito eficiente contra inadimplência</li>
                                <li>Garantia de recebimento (até 30x o valor do aluguel)</li>
                                <li>Maior taxa de conversão em aluguéis</li>
                                <li>Sem burocracias, 100% digital</li>
                                <li>Suporte de marketing para divulgação</li>
                            </ul>
                        </div>
                    </div>

                </div>               
            </div>
        </>
    )
}

export default Real_estate