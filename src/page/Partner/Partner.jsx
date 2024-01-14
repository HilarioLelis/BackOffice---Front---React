import style from './Partner.module.css'
import Partners from '../../assets/img/Partner-photo.png'
import Logo from '../../assets/img/backoffice-logo.png'

const Partner = () => {
    return (
            <div className={style.MainPartner}>
                <div className={`${style.Partner} container`}>
                    <div className={style.ImgPatnerns}>
                        <img src={Partners} alt="" />
                    </div>
                    <div className={style.TextArea}>
                        <div className={style.Text}>
                            <h1>
                                Uma parceria para empoderar ainda mais
                                <span>
                                    <h1>as imobiliárias</h1>
                                </span>
                            </h1>

                        </div>
                        <div className={style.TextP}>
                            <p>
                                Juntas, seguiremos apostando no conhecimento local das imobiliárias e no trabalho especializado dos corretores para criar inovações para todas as pontas da locação residencial.
                            </p>
                        </div>
                        <div>
                            <img className={style.Logo} src={Logo} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        )
}

export default Partner