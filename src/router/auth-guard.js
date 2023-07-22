import { useStore } from "vuex"

const isAuthenticated = (to, from, next) => {

    const store = useStore()

    const isAuthenticated = store.getters['auth/isAuthenticated']

    if (isAuthenticated) {
        next()
    } else {
        next({ name: 'login' })
    }
}

export default isAuthenticated