export const getFilter = (state) =>{
    return state.lots.filters
}

export const getLots = (state) =>{
    return state.lots.lots
}

export const getPageCount = (state) =>{
    return state.lots.pageCount
}

export const getCurrentPage = (state) =>{
    return state.lots.currentPage
}

export const getSearchStr = (state) =>{
    return state.lots.search
}