import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'
const timeKey = 'hrsaas-timestamp-key'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  Cookies.set(TokenKey, token)
}

export function removeToken() {
  Cookies.remove(TokenKey)
}

export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(timeKey)
}
