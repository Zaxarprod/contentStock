import React from 'react'
import style from './CartLot.module.scss'

const CartLot = () =>{
    return (
        <div className={style.wrapper}>
            <div className={style.cart}>
                <div className={style.dateBlock}>
                    <div><p>Начать</p><p>02 декабря 2020, 07:00</p></div>
                    <div><p>Завершить</p><p>05 декабря 2020, 09:00</p></div>
                </div>
                <div className={style.priceBlock}>
                    <div><p>Бюджет</p><p>Крупный - от 4000 Р</p></div>
                    <div><p>Оплата задания</p><p>Банковской картой</p></div>
                </div>
                <div className={style.descriptionBlock}>
                    <div>
                        <p>Описание</p>
                        <p>
                            Тут подробное описание лота<br/>
                            Тут подробное описание лота<br/>
                            Тут подробное описание лота<br/>
                            Тут подробное описание лота<br/>
                            Тут подробное описание лота<br/>
                            Тут подробное описание лота
                        </p>
                    </div>
                </div>
                <div className={style.mainButton}>
                    <div>Привести в исполнение</div>
                </div>
            </div>
        </div>
    )
}

export default CartLot