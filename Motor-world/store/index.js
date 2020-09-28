import jwt_decode from 'jwt-decode'

export const state = () => ({
  isAuth: false,
  currentToken: null,
  loggedUser: null,

})
export const actions = {
  login(context) {
    let token = window.localStorage.token || null
    context.commit('setCurrentToken', token)
  },
  logout(context) {
    window.localStorage.removeItem("token");
    context.commit('setCurrentToken')
  }
}

export const mutations = {
  setCurrentToken(state, token = null) {
    state.currentToken = token

    console.info(state.isAuth)
    if (token) {
      state.loggedUser = jwt_decode(token)
      console.log(state.loggedUser)
      this.$axios.setHeader('Authorization', 'Bearer' + state.currentToken)
      state.isAuth = true
    }
    if (!token) {
      state.loggedUser = null
      state.currentToken = null
      delete this.$axios.defaults.headers.common["Authorization"]
      state.isAuth = false
    }
  }
}
