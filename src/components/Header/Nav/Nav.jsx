import React from 'react'
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <div>
                <NavLink to={'/lots'}>Лоты</NavLink>
            </div>
            <div>
                <NavLink to={''}>Вознаграждения</NavLink>
            </div>
            <div>
                <NavLink to={''}>Контакты</NavLink>
            </div>
            <div>
                <NavLink to={''}>Для заказчиков</NavLink>
            </div>
        </div>
    )
}

export default Nav