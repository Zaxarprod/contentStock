export const getFilter = (state) =>{
    return state.players.filter
}

export const getPlayers = (state) =>{
    return state.players.players
}

export const getPageCount = (state) =>{
    return state.players.pageCount
}

export const getCurrentPage = (state) =>{
    return state.players.currentPage
}

export const getSearchStr = (state) =>{
    return state.players.search
}