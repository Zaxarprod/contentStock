import React from 'react'
import style from './WalletOut.module.scss'
import {SetIsLoginAlert, SetIsWalletINAlert, SetIsWalletOutAlert} from "../../../redux/app-reducer";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {Field, Form, Formik} from "formik";
import {LoginTC} from "../../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import sber from './../../../common/images/payment systems/Сбер.png'

const WalletOut = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.formBlock}>
            <div className={style.cancel} onClick={()=>{
                dispatch(SetIsWalletOutAlert(false))
            }}>
                <CloseOutlined />
            </div>
            <Formik
                initialValues={{ price: 1000, }}
                validate={values => {}}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(LoginTC(values.email,values.password))
                    setSubmitting(false)
                }}

            >

                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <h2>Какую сумму хотите вывести?</h2>
                        <Field type="text" name="price" placeholder={'Введите сумму'}/>
                        <p>Минимальная сумма вывода 1000Р</p>
                        <h2>Куда удобне получить деньги?</h2>
                        <div className={style.systems}>
                            <div>
                                <img src={sber} />
                                <p>Сбер</p>
                            </div>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            <div>Вывести средства</div>
                        </button>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

const WalletOutAlert = () => {
    return (
        <div className={style.wrapper}>
            <WalletOut />
        </div>
    )
}

export default WalletOutAlert

