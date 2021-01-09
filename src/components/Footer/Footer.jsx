import React from 'react'
import style from './Footer.module.scss'
import {Col, Row} from "antd";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <Row>
                <Col span={3}></Col>
                <Col span={18}>
                    <div className={style.yellowLine}></div>
                    <div className={style.contentBlock}>
                        <div>
                            <h2>ЛОТЫ</h2>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                        </div>
                        <div>
                            <h2>ВОЗНАГРАЖДЕНИЯ</h2>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                        </div>
                        <div>
                            <h2>ДЛЯ ЗАКАЗЧИКОВ</h2>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                        </div>
                        <div>
                            <h2>КОНТАКТЫ</h2>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                            <div>Новые</div>
                            <div>Популярные</div>
                            <div>Популярные</div>
                        </div>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
            <div className={style.blueLine}></div>
        </div>
    )
}

export default Footer