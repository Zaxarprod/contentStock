import axios from "axios"

export const SET_FILTER = 'Lots/SET-FILTER'
export const SET_CURRENT_PAGE = 'Lots/SET_CURRENT_PAGE'


let initialState = {
    filters: {},
    lots: [],
    currentPage: 1,
    pageCount: 0,
    search: '',
}

export const lotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            debugger
            return {
                ...state,
                filters: action.filters,
                currentPage: action.page,
                lots: action.lots,
                pageCount: action.pageCount,
                search: action.search,

            }
        default:
            return state
    }
}



const SetFilterAC = (filters, lots, page, pageCount, search) => ({
    type: SET_FILTER,
    filters,
    lots,
    page,
    pageCount,
    search,
})

export const SetFilterTC = (filter = {}, page = 1, search = '') => {
    return async (dispatch) => {
        let data = await axios.post('http://104.248.92.48/frick_stock/api/v1/lots/filter/', {
            filters: filter,
            page,
            search,
        }).then(res=>res.data)
        debugger
        dispatch(SetFilterAC(data.data.filters, data.data.lots, page, data.data.total_page_count, search))
        debugger
    }
}