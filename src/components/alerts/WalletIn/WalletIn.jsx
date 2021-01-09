import React from 'react'
import style from './WalletIn.module.scss'
import {SetIsLoginAlert, SetIsWalletINAlert} from "../../../redux/app-reducer";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {Field, Form, Formik} from "formik";
import {LoginTC} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import sber from './../../../common/images/payment systems/Сбер.png'

const WalletIn = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.formBlock}>
            <div className={style.cancel} onClick={()=>{
                dispatch(SetIsWalletINAlert(false))
            }}>
                <CloseOutlined />
            </div>
            <Formik
                initialValues={{ price: '300', }}
                validate={values => {}}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(LoginTC(values.email,values.password))
                    setSubmitting(false)
                }}

            >

                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <h2>На какую сумму хотите пополнить кошелек?</h2>
                        <Field type="text" name="price" placeholder={'Введите сумму'}/>
                        <p>Минимальная сумма попоплнения 300Р</p>
                        <h2>Как удобнее оплатить?</h2>
                        <div className={style.systems}>
                            <div>
                                <img src={sber} />
                                <p>Сбер</p>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            <div>Пополнить счёт</div>
                        </button>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

const WalletInAlert = () => {
    return (
        <div className={style.wrapper}>
            <WalletIn />
        </div>
    )
}

export default WalletInAlert

