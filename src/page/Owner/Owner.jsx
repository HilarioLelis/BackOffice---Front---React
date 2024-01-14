import Owners from '../../assets/img/home-office3.jpg'
import style from './Owner.module.css'

const Owner = () => {
    return (
        <>
            <div className={style.MainTopics}>
                <div className={`${style.Topics} container`}>
                    <div>
                        <h2>
                            Proprietários
                        </h2>
                        
                    </div>

                    <div className={style.TopicsInfo}>

                    
                        <div>
                            <h3>Não atuamos direto com</h3>
                            <h4>proprietários, mas fique tranquilo, estamos nas melhores imobiliárias.</h4>
                            <ul>
                                <li>Agilidade para alugar</li>
                                <li>Recebimento garantido dos aluguéis</li>
                                <li>epasse rápido dos valores em caso de inadimplência</li>
                                <li>Análise de crédito eficiente para diminuir inadimplência</li>
                            </ul>
                            <p>A fiança CredPago está de acordo com a Lei 8245. A Lei do Inquilinato.</p>
                        </div>

                        <div>
                            <img src={Owners} alt="" />
                        </div>
                        
                    </div>
                </div>               
            </div>
        </>
    )
}

export default Owner