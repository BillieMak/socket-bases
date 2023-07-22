// export const myMutation = (state) => {
    
// }
export const setUser = (state,name='') => {

    if (name.length <= 0) return

    state.user = {name}
    state.isAuthenticated = true
}

export const logout = (state) => {
    state.user = null
    state.isAuthenticated = false
}