const users = require('./users')
const login = require('./login')

module.exports = [
    ...users, //Los tres puntos se utilizan para recorrer el array de users
    ...login
]