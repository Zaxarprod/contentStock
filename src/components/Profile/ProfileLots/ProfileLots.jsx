import React, {Fragment, useState} from 'react'
import style from './ProfileLots.module.scss'
import {Col} from "antd";

const ProfileLots  = () => {
    const [active, setActive] = useState(1)
    return (
        <Fragment>
            <div className={style.lotsNav}>
                <div className={(active===1) && style.active} onClick={()=>{
                    setActive(1)
                }}>Активные лоты</div>
                <div className={(active===2) && style.active} onClick={()=>{
                    setActive(2)
                }}>Выполненные лоты</div>
                <div className={(active===3) && style.active} onClick={()=>{
                    setActive(3)
                }}>Заказанные лоты</div>
            </div>
            <div className={style.lots}>

            </div>
        </Fragment>
    )
}

export default ProfileLots