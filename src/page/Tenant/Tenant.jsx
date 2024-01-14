import Tenants from '../../assets/img/home-office1.jpg'
import style from './Tenant.module.css'

const Tenant = () => {
    return (
        <>
            <div className={style.MainTopics}>
                <div className={`${style.Topics} container`}>
                    <div>
                        <h2>
                        Inquilinos
                        </h2>
                        
                    </div>

                    <div className={style.TopicsInfo}>
                        <div>
                            <h3>Inquilinos</h3>
                            <h4>Liberdade para alugar 100% digital</h4>
                            <ul>
                                <li>Sem fiador</li>
                                <li>Sem caução</li>
                                <li>Sem comprovação de renda</li>
                                <li>Análise instantânea</li>
                                <li>arcelamento em até 12X</li>
                            </ul>
                        </div>
                        <div>
                            <img src={Tenants} alt="" />
                        </div>
                    </div>
                </div>               
            </div>
        </>
    )
}

export default Tenant