import axios from "axios"

export const SET_PROFILE = 'PROFILE/SET_PROFILE'


let initialState = {
    profile: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state
    }
}

export const SetProfile = (value) => ({
    type: SET_PROFILE,
    profile: value,
})


export const SetProfileTC = (id) => {
    return async (dispatch) => {
        debugger
        let data = await axios.get(`http://104.248.92.48/frick_stock/api/v1/user?id=${id}`, {
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        }).then(res=>res.data)
        dispatch(SetProfile(data))

    }
}