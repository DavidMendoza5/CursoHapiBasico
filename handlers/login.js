const { User } = require('../ps-models')
const Boom = require('@hapi/boom')
const { matchPassword } = require('../utils/matchPassword')
const { generateToken } = require('../utils/token')

async function login({ payload }, h) {
    const {
        name,
        password
    } = payload
    let matchUser
    try {
        matchUser = await User.findOne({
            where: { name }
        })
    } catch (error) {
        throw Boom.badImplementation('Error accesing database')
    }
    if (!matchUser) throw Boom.unauthorized('User not found')
    const matchPass = await matchPassword(password, matchUser.dataValues.password)
    if (!matchPass) throw Boom.unauthorized('Invalid password')
    payload.password = matchUser.dataValues.password
    const token = generateToken(payload)

    return h
    .response({
        message: 'Successful access',
        token
    }).code(200).header('Content-Type', 'application/json')
}

module.exports = {
    login
}