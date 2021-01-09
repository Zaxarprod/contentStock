import React from 'react'
import style from './Block3.module.scss'
import {Col, Row} from "antd"
import {NavLink} from "react-router-dom";

const Block3 = () => {
    let carts = [
        {
          img: '',
          text: 'Набить татуировку с именем заказчика',
        },
        {
            img: '',
            text: 'Набить татуировку с именем заказчика',
        },
        {
            img: '',
            text: 'Набить татуировку с именем заказчика',
        },
        {
            img: '',
            text: 'Набить татуировку с именем заказчика',
        },
        {
            img: '',
            text: 'Набить татуировку с именем заказчика',
        },
        {
            img: '',
            text: 'Набить татуировку с именем заказчика',
        },
    ]
    return (
        <Row className={style.wrapper}>
            <Col span={3}>

            </Col>
            <Col span={18} className={style.contentBlock}>
                <p className={style.background}><b>ERR</b></p>
                <h1>Популярные лоты</h1>
                <div className={style.cartsBlock}>
                    {carts.map(cart=>{
                        return (
                            <div>
                                <div className={style.border}></div>
                                <img src={cart.img}/>
                                <p>{cart.text}</p>
                            </div>
                        )
                    })}
                </div>
                <NavLink to={'/lots'} className={style.button}>
                    Посмотреть все лоты
                    <div></div>
                </NavLink>
            </Col>
            <Col span={3}>

            </Col>
        </Row>
    )
}

export default Block3