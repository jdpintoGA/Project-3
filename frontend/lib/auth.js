function setToken(token) {
  localStorage.setItem('token', token)
}

function isLoggedIn() {
  //so technically if someone store a token as a random string in their localStorage,
  //they will be able to see the members only navbar
  //BUT they won't be able to do any of the user only stuff cuz jwt verify happens in secureRoute
  return !!localStorage.getItem('token')
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
