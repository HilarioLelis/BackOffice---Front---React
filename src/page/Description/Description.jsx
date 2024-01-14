import style from './Description.module.css'
import Family from '../../assets/img/familia.jpg'


const Description = () => {
    return (
        <>
            <div className={`${style.Information}`}>
                <div className={`${style.TextPrimary} container`}>
                    <div>
                        <h1>
                            Aluguel sem fiador,
                        </h1>
                        <h1 className={style.TextPrimaryDestack}>
                            rápido e garantido
                        </h1>
                        <p>Com CredPago todo mundo <span>aluga sem fiador</span>.</p>
                        <p>A <span>imobiliária</span> não exige,</p>
                        <p>o <span>inquilino</span> não depende e</p>
                        <p>o <span>proprietário</span> se garante.</p>
                    </div>

                    <div>
                        <img className={style.TextPrimaryImg} src={Family} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.Business} >
                <h1>Uma família de facilidades</h1>
                <h1><span>para simplificar sua vida</span></h1>
            </div>
        </>
    )
}

export default Description