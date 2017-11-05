"use strict"

const Exception = require('./exception')

class InvalidLoginConfigException extends Exception {
    constructor( ) {
        super("Invalid login configuration")
    }
}

module.exports = InvalidLoginConfigException
