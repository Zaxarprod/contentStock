import axios from "axios"
export const REG = 'reg/REG'

let initialState= {
    isAuth: false,
    user: null,
    token: localStorage.getItem('token'),
    answers: [],
    requests: [],
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {
        case REG:

        default:
            return state
    }
}

export const RegTC = () => {
    return async (dispatch) => {
        debugger
        let data = await axios.post('http://104.248.92.48/frick_stock/api/v1/auth/users/',{
            username: 'zakhar32',
            password: '123rerwfdsf22',
            email: '',
        })
        debugger
    }
}