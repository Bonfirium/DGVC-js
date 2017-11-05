"use strict"

const InvalidLoginConfigException = require('./invalid_login_config_exception')
const Golos = require('golos-js')

class GolosManager {
    constructor (login_config) {
        this.accountName = login_config.accountName
        this.password = login_config.password
        // TODO: verify authorization
        // auth.verify always returns true
        this.keys = Golos.auth.generateKeys(this.accountName, this.password, ['posting'])
        if (!Golos.auth.verify(this.accountName, this.password, {'posting': [ [this.keys['posting'] ]]})) {
            throw new InvalidLoginConfigException( )
        }
    }
}

module.exports = GolosManager
