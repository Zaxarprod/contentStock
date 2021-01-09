import React, {useState} from 'react'
import {Col, Row} from "antd"
import style from './Header.module.scss'
import Nav from "./Nav/Nav";
import {useDispatch, useSelector} from "react-redux";
import {SetIsLoginAlert} from "../../redux/app-reducer";
import {getIsAuth, getUser} from "../../redux/auth-selector";
import {LogoutTC} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)
    const user = useSelector(getUser)
    const [isOpenedUser, setIsOpenedUser] = useState(false)
    return (
        <Row className={style.wrapper}>
            <Col span={3} className={style.brand}>
                FRICK<br/>
                STOCK
            </Col>
            <Col span={14} className={style.navBlock}>
                <Nav />
            </Col>
            { !isAuth &&
                <Col span={4} className={style.loginBlock}>
                    <div>Регистрация</div>
                    <div
                        onClick={() => {
                            dispatch(SetIsLoginAlert(true))
                        }}
                    >Вход
                    </div>
                </Col>
            }
            {
                isAuth && user &&
                <Col span={4} className={style.loginedBlock}>
                    <div>
                        {user.username}
                    </div>
                    <div className={style.userBlock}
                         onClick={()=>{
                             setIsOpenedUser(!isOpenedUser)
                         }
                         }>
                    </div>
                    <div className={style.list + ` ${isOpenedUser?style.openList:style.closeList}`} onClick={
                        ()=>{
                            setIsOpenedUser(false)
                        }
                    }>
                        <div>
                            <NavLink to={'/profile'}
                                     style={{textDecoration:'none'}}>
                                Личный кабинет
                            </NavLink>
                        </div>
                        <div
                            onClick={()=>{
                                dispatch(LogoutTC())
                            }}
                        >
                            Выход
                        </div>
                    </div>
                </Col>
            }
            <Col span={3}>
            </Col>
        </Row>
    )
}

export default Header