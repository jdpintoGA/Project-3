function setToken(token) {
  localStorage.setItem('token', token)
}

function isLoggedIn() {
  const isLoggedIn = !!localStorage.getItem('token')
  console.log('logged' + isLoggedIn)
  return isLoggedIn
}

function logout() {
  localStorage.removeItem('token')
}

function getToken() {
  return localStorage.getItem('token')
}

export default {
  setToken,
  isLoggedIn,
  logout,
  getToken
}
