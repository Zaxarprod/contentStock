export const SET_IS_LOGIN_ALERT = 'APP/SET_IS_LOGIN_ALERT'
export const SET_IS_WALLET_IN_ALERT = 'APP/SET_IS_WALLETIN_ALERT'
export const SET_IS_WALLET_OUT_ALERT = 'APP/SET_IS_WALLET_OUT_ALERT'

export const URL = 'http://165.22.192.77/'

let initialState= {
    isLoginAlert: false,
    isWalletInAlert: false,
    isWalletOutAlert: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOGIN_ALERT: {
            return {
                ...state,
                isLoginAlert: action.value,
            }
        }
        case SET_IS_WALLET_IN_ALERT: {
            return {
                ...state,
                isWalletInAlert: action.value,
            }
        }
        case SET_IS_WALLET_OUT_ALERT: {
            return {
                ...state,
                isWalletOutAlert: action.value,
            }
        }
        default:
            return state
    }
}

export const SetIsLoginAlert = (value) => ({
    type: SET_IS_LOGIN_ALERT,
    value,
})

export const SetIsWalletINAlert = (value) => ({
    type: SET_IS_WALLET_IN_ALERT,
    value,
})

export const SetIsWalletOutAlert = (value) => ({
    type: SET_IS_WALLET_OUT_ALERT,
    value,
})

export default appReducer