import jwt from 'jsonwebtoken'
const SERECT_KEY_TOKEN = 'reactJS-2105'

function isEmptyObject(obj) {
    for(let prop in obj) {
        // kiểm tra trong obj có tồn tại key k ?
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
    // return true là obj rỗng
}

// save token localStorage
function saveTokenLocalStorage(token) {
  if (token !== null && token !== '') {
    window.localStorage.setItem('token_login', token);
  }
}

// remove token localStorage
function removeToken() {
  window.localStorage.removeItem('token_login')
}

// get token from localStorage
function getTokenLocalStorage() {
  let token = window.localStorage.getItem('token_login')
  return token
}

// giải mã token
function decryptToken() {
  let encryptedToken = getTokenLocalStorage()
  let decoded = {}
  if (encryptedToken !== null && encryptedToken !== '') {
    decoded = jwt.verify(encryptedToken, SERECT_KEY_TOKEN)
  }
  return decoded
}

// get username login
function getUsername() {
  const infoUser = decryptToken()
  if (infoUser.hasOwnProperty('fullname')) {
    return infoUser.fullname
  }
  return null
}

function getIdUser() {
  const infoUser = decryptToken()
  if (infoUser.hasOwnProperty('id')) {
    return parseInt(infoUser.id)
  }
  return 0
}

function fakeAuthLogin() {
  let user = getUsername()
  let id = getIdUser()
  if (user !== null && id > 0) {
    return true
  }
  return false
}

export const helper = {
  isEmptyObject,
  saveTokenLocalStorage,
  getUsername,
  removeToken,
  fakeAuthLogin,
}