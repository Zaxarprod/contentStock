import React from './Block5.module.scss'
import style from './Block5.module.scss'
import {Col, Row} from "antd"
import svg from './../../../common/images/home/руки.svg'

const Block5 = () => {
    return (
        <div className={style.wrapper}>
            <img src={svg} className={style.svgImg}/>
            <Row>
                <Col span={3}>

                </Col>
                <Col span={18} className={style.contentBlock}>
                    <h1>
                        КАК РАБОТАЕТ<br/>
                        <span style={{color:'#7FD6C2'}}>КОНТЕНТ-БИРЖА?</span>
                    </h1>
                </Col>
                <Col span={3}>

                </Col>
            </Row>
            <Row className={style.backgroundImg}>
                <Col span={3}>

                </Col>
                <Col span={18} className={style.contentBlock2}>
                    <h1>
                        ДЛЯ <span style={{color:'#F7CA2F'}}>ИСПОЛНИТЕЛЕЙ</span>
                    </h1>
                    <div className={style.wayBlock}>
                        <div>
                            <div>
                                <div>1.Выбираешь понравившийся лот или создаешь свой</div>
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div>
                                <div>2.Выполняешь задание и загружаешь его в ЛК</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>3.Получаешь денежное вознаграждение</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className={style.button}>
                        <div></div>
                        Стать исполнителем
                    </div>
                    <h1>
                        ДЛЯ <span style={{color:'#3A7DD6'}}>ЗАКАЗЧИКОВ</span>
                    </h1>
                    <div className={style.wayBlock}>
                        <div>
                            <div style={{background:'#3A7DD6'}}>
                                <div>1.Создаешь любой лот для исполнтеля</div>
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div style={{background:'#3A7DD6'}}>
                                <div>2.Назначаешь цену исполнителю за выполнение лота</div>
                            </div>
                        </div>
                        <div>
                            <div style={{background:'#3A7DD6'}}>
                                <div>3.Получаешь выполненное задание от исполнителя</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className={style.button}>
                        <div style={{left:'8px'}}></div>
                        Стать заказчиком
                    </div>
                </Col>
                <Col span={3}>

                </Col>
            </Row>
        </div>
    )
}

export default Block5