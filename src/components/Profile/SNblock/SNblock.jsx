import React, {Fragment} from 'react'
import style from './SNblock.module.scss'

const SNblock = () => {
    return (
        <Fragment>
            <div className={style.paddingBlock}>
                Padding
            </div>
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
                <br/>
                <p>
                    Привяжите остальные соц сети,<br/>
                    чтобы повысить доверие к себе
                </p>
                <div>
                    <div>

                    </div>
                    <div>
                        Email
                        <a>Привязать</a>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        Email
                        <a>Привязать</a>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        Email
                        <a>Привязать</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SNblock