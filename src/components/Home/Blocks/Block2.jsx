import React from 'react'
import style from './Block2.module.scss'
import {Col, Row} from "antd"
import Search from "antd/es/input/Search"
import svg from "../../../common/images/home/шляпа.svg"

const Block2 = () => {
    return (
        <Row className={style.wrapper}>
            <Col span={24} className={style.searchBlock}>
                <img src={svg} className={style.svgImg}/>
                <p>На платформе зарегистрировано больше 1000 исполнителей</p>
                <Search placeholder="Найди своего любимого исполнителя или лот"
                        enterButton
                        className={style.inputSearch}
                />
            </Col>
        </Row>
    )
}

export default Block2