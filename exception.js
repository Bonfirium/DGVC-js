
class Exception {
    constructor(message) {
        if (typeof message !== string) throw new Exception("Wrong exception parameter")
        this.message = message
    }
}

module.exports = Exception
