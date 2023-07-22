// export const myGetter = (state) =>{

// }
export const getUser = (state) =>{
    return state.user
}

export const getToken = (state) =>{
    return state.token
}

export const isAuthenticated = (state) =>{
    return state.isAuthenticated
}