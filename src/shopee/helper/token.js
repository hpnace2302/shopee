const saveTokenLocalStorage = (token) => {
  if (token !== null && token !== undefined && token !== "") {
    window.localStorage.setItem('token_login_shopping', token)
  }
}

const getTokenStorage = () => {
  const token = window.localStorage.getItem('token_login_shopping')
  return token
}

const checkIsAuthenticated = () => {
  const tokenLogin = getTokenStorage()
  if (tokenLogin !== null && tokenLogin !== undefined && tokenLogin !== "") {
    return true
  }
  return false
}

const removeTokenLocalStorage = () => {
  window.localStorage.removeItem('token_login_shopping')
}

export const token = {
  saveTokenLocalStorage,
  checkIsAuthenticated,
  removeTokenLocalStorage,
  getTokenStorage,
}