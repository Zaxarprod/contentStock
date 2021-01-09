import React from 'react'
import style from './LoginAlert.module.scss'
import {useDispatch} from "react-redux";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import {Field, Form, Formik} from "formik";
import {SetIsLoginAlert} from "../../redux/app-reducer";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import WechatOutlined from "@ant-design/icons/lib/icons/WechatOutlined";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import {LoginTC} from "../../redux/auth-reducer";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch()
    return (
        <div className={style.formBlock}>
            <div className={style.cancel} onClick={()=>{
                dispatch(SetIsLoginAlert(false))
            }}>
                <CloseOutlined />
            </div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {}}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(LoginTC(values.email,values.password))
                    setSubmitting(false)
                }}

            >

                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <h3>Быстрый вход через:</h3>
                        <div className={style.snBlock}>
                            <div>VK</div>
                            <div>FACEBOOK</div>
                            <div>GMAIL</div>
                            <div>OK</div>
                            <div>APPLE ID</div>
                            <div>MAIL</div>
                        </div>
                        <h3 style={{marginBottom:'20px'}}>Вход</h3>
                        <Field type="text" name="email" placeholder={'Логин'}/>
                        <Field type="password" name="password" placeholder={'Пароль'}/><br/>
                        <div className={style.buttonBlock}>
                            <button type="submit" disabled={isSubmitting}>
                                <div>ПОГНАЛИ!</div>
                            </button>
                        </div>
                        <NavLink to={''}>Зарегистрироваться!</NavLink>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

const LoginAlert = () => {
    return (
        <div className={style.wrapper}>
            <LoginForm />
        </div>
    )
}

export default LoginAlert