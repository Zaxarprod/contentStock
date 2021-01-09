import React from 'react'
import style from './Lot.module.scss'
import {Col, Row} from "antd";
import CartLot from "./CartLot/CartLot";

const Lot = () => {
    return (
        <div className={style.wrapper}>
            <Row>
                <Col span={3}></Col>
                <Col span={14}>
                    <h1 className={style.mainHeader}>Подойти к прохожему и попросить купить тебе еды</h1>
                    <div className={style.price}>от 4000 руб.</div>
                    <div className={style.lotInfo}>
                        <div>Открыто</div>
                        <div>50 просмотров</div>
                        <div>Создано 2 дня назад</div>
                        <div>#прохожий</div>
                    </div>
                </Col>
                <Col span={4}></Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={14}>
                    <CartLot />
                </Col>
                <Col span={4}>
                    <div className={style.ownerBlock}>
                        <h3>Заказчик этого лота</h3>
                        <div>
                            <img src={''}/>
                            <div>
                                <p>Куз Петро</p>
                                <p>нет отзывов</p>
                            </div>
                        </div>
                    </div>
                    <h2 className={style.similarLotsHeader}>Последние лоты</h2>
                    <div className={style.lastBlocks}>
                        <div>
                            <a>Лалалалалалалалалал</a>
                            <p>Кузькина Мать, 8000 руб</p>
                        </div>
                        <div>
                            <a>Лалалалалалалалалал</a>
                            <p>Кузькина Мать, 8000 руб</p>
                        </div>
                        <div>
                            <a>Лалалалалалалалалал</a>
                            <p>Кузькина Мать, 8000 руб</p>
                        </div>
                        <div>
                            <a>Лалалалалалалалалал</a>
                            <p>Кузькина Мать, 8000 руб</p>
                        </div>
                        <div>
                            <a>Лалалалалалалалалал</a>
                            <p>Кузькина Мать, 8000 руб</p>
                        </div>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={13}>
                    <div className={style.createLotBlock}>
                        <h2>Хотите создать свой лот?</h2>
                        <p>
                            В нашем сервисе огромное количесво ребят,готовых выполнить любое трешовое задание<br/>
                            (в рамках приличия)
                        </p>
                        <div className={style.buttonsBlock}>
                            <div>
                                <div>Создай своё задание</div>
                            </div>
                            <div>Создай такое же задание</div>
                        </div>
                    </div>
                    <h2 className={style.similarLotsHeader}>Похожие лоты</h2>
                    <div className={style.similarLots}>
                        <div>
                            <img src={''} />
                            <p>Lot_1</p>
                        </div>
                        <div>
                            <img src={''} />
                            <p>Lot_2</p>
                        </div>
                        <div>
                            <img src={''} />
                            <p>Lot_3</p>
                        </div>
                    </div>
                </Col>
                <Col span={5} className={style.faqBlock}>
                    <h2>F.A.Q.</h2>
                    <div>
                        <div>Я разместил задание — что дальше?</div>
                        <div>Я разместил задание — что дальше?</div>
                        <div>Сколько предложений я получу?</div>
                        <div>Сколько предложений я получу?</div>
                        <div>Сколько предложений я получу?</div>
                    </div>
                </Col>
                <Col span={3}></Col>
            </Row>
        </div>
    )
}

export default Lot

