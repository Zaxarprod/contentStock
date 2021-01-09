import React from 'react'
import style from './Block4.module.scss'
import {Col, Row} from "antd"
import svg from './../../../common/images/home/телефон.svg'
import {NavLink} from "react-router-dom";

const Block4 = () => {
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
            <img src={svg} className={style.svgImg} />
            <Col span={3}>

            </Col>
            <Col span={18} className={style.contentBlock}>
                <p className={style.background}><b>OR</b></p>
                <h1>Популярные исполнители</h1>
                <div className={style.cartsBlock}>
                    {carts.map(cart=>{
                        return (
                            <div>
                                <div></div>
                                <img src={cart.img}/>
                                <p>{cart.text}</p>
                            </div>
                        )
                    })}
                </div>
                <NavLink to={'/players'} className={style.button}>
                        Посмотреть всех исполнителей
                        <div></div>
                </NavLink>
            </Col>
            <Col span={3}>

            </Col>
        </Row>
    )
}

export default Block4