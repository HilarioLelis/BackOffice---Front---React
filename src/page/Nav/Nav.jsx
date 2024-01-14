import style from './Nav.module.css'
import Logo from '../../assets/img/backoffice-logo.png'
import React from 'react'
import useMedia from '../../Hooks/useMedia'
import Menu from '../Menu/Menu'
import MenuMobile from '../Menu-mobile/Menu-mobile'

const Nav = () => {
    
    const mobile = useMedia("(max-width: 1040px)")

    return (
        <>
            <div className={style.Navbar}>
                <div>
                    <img className={style.Logo} src={Logo} alt="Logo" />
                </div>

                {!mobile && 
                   <Menu/>
                }
                {mobile && <MenuMobile/>}
            </div>
        </>
    )
}

export default Nav