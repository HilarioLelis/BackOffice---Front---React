import style from './Footer.module.css'
import Logo from '../../assets/img/backoffice-logo.png'
import Instagram from '../../assets/img/instagram.png'
import Facebook from '../../assets/img/facebook.png'
import Youtube from '../../assets/img/youtube.png'
import Linkedin from '../../assets/img/linkedin.png'

const Footer = () => {
    return (
        <>
            <div >
                <div className={style.Advertising}>

                </div>
                <div className={`${style.More}`}>
                        <div className={style.Moredetail}>
                            <h3>Sobre a Garantia CredPago</h3>
                            <a href="">Quanto Custa</a>
                            <a href="">Como Funciona</a>
                        </div>

                        <div className={style.Moredetail}>
                            <h3>Sobre a empresa</h3>
                            <a href="">Nossa História</a>
                            <a href="">Missão, visão e valores</a>
                            <a href="">Embaixadores</a>
                            <a href="">Trabalhe Conosco</a>
                        </div>

                        <div className={style.Moredetail}>
                            <h3>Ajuda | FAQ</h3>
                            <a href="">Validar Certificado CredSign</a>
                            <a href="">Validar Certificado Novo CredSign</a>
                            <a href="">Política de Privacidade</a>
                            <a href="">Política de Cookies</a>
                            <a href="">Perguntas Frequentes</a>
                        </div>

                        <div className={style.Moredetail}>
                            <h3>Fale com a gente</h3>
                            <a href="">Entre em contato</a>
                            <a href="">Quero me cadastrar</a>
                        </div>

                        <div className={style.Moredetail}>
                            <h3>Acessos</h3>
                            <a href="">Área do Inquilino</a>
                            <a href="">Área da Imobiliária</a>
                            <a href="">Download da Marca</a>
                        </div>

                        <div className={style.Moredetail}>
                            <h3>Redes Sociais</h3>
                            <a href=""><img  src={Instagram} alt="" />Instagram</a>
                            <a href=""><img  src={Facebook} alt="" />Facebook</a>
                            <a href=""><img  src={Youtube} alt="" />Youtube</a>
                            <a href=""><img  src={Linkedin} alt="" />Linkedin</a>
                        </div>
                    </div>
                    <div className={style.Logo}>
                        <img src={Logo} alt="" />
                    </div>
            </div>
        </>
    )
}

export default Footer