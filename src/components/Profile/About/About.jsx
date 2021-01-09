import React, {Fragment} from 'react'
import style from './About.module.scss'
import {Col} from "antd";

const About  = () => {
    return (
        <Fragment>
            <div className={style.addInfoBlockContent}>
                <div>
                    <h2>Немного о себе</h2>
                </div>
                <p>
                    Заказчики ничего не знают о тебе. Расскажи хоть какую-то инфу,чтобы им не было так стремно.
                </p>
            </div>
            <div className={style.exapmleLotsBlock}>
                <h2>Примеры выполненных лотов</h2>
                <p>
                    Если у вас есть примеры выполненной вами работы, обязательно прикрепите их, это покажет вас в лучшем<br/>
                    свете в глазах автора задания. А также вы будете вызывать больше доверия как исполнитель.
                </p>
                <div className={style.buttonBlock}>
                    <div>
                        Загрузить фото
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About