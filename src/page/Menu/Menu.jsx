import styleButton from '../Nav/Nav.module.css'


const Menu = () => {
    return (
        <>
            <div>
                <a href="">Produtos</a>
                <a href="">Aluguel sem fiador</a>
                <a href="">Blog</a>
            </div>

            <div>
                <button>Atendimento</button>
                <button className={styleButton.CenterBtn}>Novos Parceiros</button>
                <button>Entrar</button>
            </div>
        </>
    )
}

export default Menu