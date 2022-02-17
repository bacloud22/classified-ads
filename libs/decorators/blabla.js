const renderer = require('../services/renderer')
require('dotenv').config()
const config = require('config')
// incremental is better at least here in app.js
const NODE_ENV = {
    'monkey chaos': -1,
    'localhost': 0,
    'development': 1,
    'production': 2
}[process.env.NODE_ENV]
const COOKIE_NAME = config.get('COOKIE_NAME')

function blabla(context, req) {
    // get priore user info somehow
    const user = {}
    // safe add cookies when not present, for app-light.js (testing case)
    req['cookies'] =  req['cookies'] ? req['cookies'] : {}
    user['nickname'] = req.params.username ? req.params.username : req.cookies[COOKIE_NAME] ? '🏠' : ''
    if (NODE_ENV == -1) {
        this.send(context[0])
    } else {
        Object.assign(context[0], { user: user })
        const userFriendlyMsg = renderer(...context)
        const route = context[1]
        this.view(`/templates/pages/${route}`, userFriendlyMsg)
    }
}

module.exports = blabla
