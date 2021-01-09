import axios from "axios"

export const SET_FILTER = 'Players/SET-FILTER'
export const SET_CURRENT_PAGE = 'Players/SET_CURRENT_PAGE'


let initialState = {
    filter: {},
    players: [],
    currentPage: 1,
    pageCount: 0,
    search: '',
}

export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter,
                currentPage: action.page,
                players: action.players,
                pageCount: action.pageCount,
                search: action.search,
            }
        default:
            return state
    }
}



const SetFilterAC = (filter, players, page, pageCount) => ({
    type: SET_FILTER,
    filter,
    players,
    page,
    pageCount,
})

export const SetFilterTC = (filter = {}, page = 1, search = '') => {
    return async (dispatch) => {
        debugger
        let data = await axios.post('http://104.248.92.48/frick_stock/api/v1/clients/filter/', {
            filters: filter,
            page,
            search,
        }).then(res=>res.data)
        debugger
        dispatch(SetFilterAC(data.data.filters, data.data.clients, page, data.data.total_page_count, search))
    }
}

