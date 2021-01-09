import React, {Fragment} from 'react'
import style from './User.module.scss'
import {Col, Row} from "antd"

const User = () => {
    return (
        <div className={style.wrapper}>
            <Row>
                <Col span={3}></Col>
                <Col span={14} className={style.profile}>
                    <div className={style.hiBlock}>
                        Лера!
                    </div>
                    <div className={style.mainInfoBlock}>
                        <div className={style.avatar}>

                        </div>
                        <div className={style.Info}>
                            <div className={style.cityInfo}>
                                <p>
                                    23 года, Москва
                                </p>
                                <p>
                                    нет оценок
                                </p>
                            </div>
                            <div className={style.statisticInfo}>
                                <div>
                                    <p>Выполненные лоты</p>
                                    <p>20</p>
                                </div>
                                <div>
                                    <p>Заказанные лоты</p>
                                    <p>2</p>
                                </div>
                                <div>
                                    <p>Награды</p>
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                    <div className={style.paddingBlock}>
                        Padding
                    </div>
                    <div className={style.offerButton}>
                        <div>
                            Предложить лот
                        </div>
                    </div>
                    <SNUserblock />
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={2}></Col>
                <Col span={12} className={style.questionButtonBlock}>
                    <div className={style.questionButton}>
                        <div>
                            Задать вопрос
                        </div>
                    </div>
                </Col>
                <Col span={4}></Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}

const SNUserblock = () => {
    return (
        <Fragment>
            <div className={style.snBlock}>
                <p>
                    На сайте с 12 декабря 2020 года
                </p>
                <div>
                    <div className={style.checked}>

                    </div>
                    <div>
                        Email
                        <p>name</p>
                    </div>
                </div>
                <div>
                    <div className={style.checked}>

                    </div>
                    <div>
                        Email
                        <p>name</p>
                    </div>
                </div>
                <div>
                    <div className={style.checked}>

                    </div>
                    <div>
                        Email
                        <p>name</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default User