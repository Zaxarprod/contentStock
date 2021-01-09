import React,{Fragment} from 'react'
import style from './Block1.module.scss'
import {Col, Row} from "antd"
import yellow from './../../../common/images/home/block1yellow.png'

const Block1 = () => {
    return (
        <Fragment>
            <div className={style.backgroundBlock}></div>
            <Row className={style.wrapper}>
                <Col span={3}>

                </Col>
                <Col span={8} className={style.contentBlock}>
                    <h1>
                        СОЗДАВАЙ<br/>
                        ПРОДАВАЙ<br/>
                        <span style={{color:'#FFD33E'}}>ЗАРАБАТЫВАЙ</span>
                    </h1>
                    <p>
                        Cоздавай лоты или выполняй уже имеющиеся,<br/>
                        цену назвачаешь только <span style={{color:'#FFD33E'}}>ты</span>
                    </p>
                    <div className={style.buttonsBlock}>
                        <div>
                            Создать лот
                            <div></div>
                        </div>
                        <div>
                            Купить лот
                            <div></div>
                        </div>
                    </div>
                </Col>
                <Col span={13}>
                    <img src={yellow} className={style.yellowImg} />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Block1