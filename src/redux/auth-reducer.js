import axios from "axios"
import {SetIsLoginAlert} from "./app-reducer";
import {SetProfile, SetProfileTC} from "./profile-reducer";

export const LOGIN = 'AUTH/LOGIN'
export const SET_ME = 'AUTH/SET-ME'
export const LOGOUT = 'AUTH/LOGOUT'

let initialState= {
    isAuth: false,
    user: null,
    token: localStorage.getItem('token'),
    answers: [],
    requests: [],
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                //token: null,
                user: null,
            }
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                //token: action.token,
            }
        case SET_ME:
            debugger
            return {
                ...state,
                user: action.user,
                isAuth: true,
            }
        default:
            return state
    }
}

const LoginAC = (token) => ({
    type: LOGIN,
    token
})

export const LogoutAC = () => ({
    type: LOGOUT,
})

const SetMeAC = (user) => ({
    type: SET_ME,
    user,
})

export const SetMeTC = () => {
    return async (dispatch) => {
        let data = await axios.get('http://104.248.92.48/frick_stock/api/v1/auth/users/me/',{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        }).then(res=>res.data)
        debugger
        dispatch(SetProfileTC(data.id))
        dispatch(SetMeAC(data))
    }
}

export const LogoutTC = () => {
    return async (dispatch) => {
        let data = await axios.post('http://104.248.92.48/frick_stock/api/v1/auth/token/logout/',{},{
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        })
        localStorage.removeItem('token')
        dispatch(LogoutAC())
    }
}

export const LoginTC = (mail, pass) => {
    return async (dispatch) => {
        let data = await axios.post('http://104.248.92.48/frick_stock/api/v1/auth/token/login/',{
            username: mail,
            password: pass,
        }).then(res=>{
            localStorage.setItem('token', res.data.auth_token)
            return res.data.auth_token
        })
        await dispatch(LoginAC(data))
        await dispatch(SetMeTC())
        dispatch(SetIsLoginAlert(false))
    }
}