import React from "react"
import Menu from "../Menu/Menu"
import style from './MenuMobile.module.css'

const MenuMobile = () => {
    const [menu, setMenu] = React.useState(false)

    function handleClick(event) {
        if(event.currentTarget == event.target) setMenu(!menu)
    }

    return (
        <div className={style.Menu} onClick={handleClick}>
            Menu
            {menu && 
                <div className={style.lista}>
                    <Menu/>
                </div>
            }
        </div>
    )
}

export default MenuMobile