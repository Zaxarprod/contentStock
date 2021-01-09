import React, {Fragment, useState} from 'react'
import style from './Wallet.module.scss'
import {Col} from "antd";
import {useDispatch} from "react-redux";
import {SetIsWalletINAlert, SetIsWalletOutAlert} from "../../../redux/app-reducer";

const Wallet  = () => {
    return (
        <div className={style.wallet}>
            <h2>Ваш баланс: 0 Р</h2>
            <Operations />
            <History />
        </div>
    )
}

const Operations = () => {
    const dispatch = useDispatch()
    const [isOperation, setIsOperation] = useState(false)
    return (
        <div className={style.operations}>
            <div className={style.operationsNav}>
                <div className={!isOperation && style.activeOperation} onClick={()=>{
                    setIsOperation(false);
                }}>Пополнение</div>
                <div className={isOperation && style.activeOperation} onClick={()=>{
                    setIsOperation(true);
                }}>Вывод</div>
            </div>
            <div className={style.operationsContent}>
                {
                    !isOperation &&
                    <div>
                        <p>Пополнить баланс на</p>
                        <input type={'text'}/>
                        <p style={{
                            marginLeft: '0.7vw',
                        }}>P</p>
                        <div className={style.button} onClick={()=>{
                            dispatch(SetIsWalletINAlert(true))
                        }}>
                            Пополнить счет
                        </div>
                    </div>
                }
                {
                    isOperation &&
                    <div>
                        <p>Вывести</p>
                        <input type={'text'}/>
                        <p style={{
                            marginLeft: '0.7vw',
                        }}>P</p>
                        <div className={style.button} onClick={()=>{
                            dispatch(SetIsWalletOutAlert(true))
                        }}>
                            Вывести деньги
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const History = () => {
    const [activeHistoryNav, setActiveHistoryNav] = useState(1)
    return (
        <div className={style.history}>
            <div className={style.timeBlock}>
                <h2>История операци</h2>
                <select>
                    <option>За день</option>
                    <option>За неделю</option>
                    <option>За месяц</option>
                </select>
            </div>
            <div className={style.filterBlock}>
                <div className={(activeHistoryNav===1) && style.active} onClick={()=>{
                    setActiveHistoryNav(1)
                }}>Все операции</div>
                <div className={(activeHistoryNav===2) && style.active} onClick={()=>{
                    setActiveHistoryNav(2)
                }}>Пополнение счета</div>
                <div className={(activeHistoryNav===3) && style.active} onClick={()=>{
                    setActiveHistoryNav(3)
                }}>Вывод средств</div>
            </div>
        </div>
    )
}

export default Wallet