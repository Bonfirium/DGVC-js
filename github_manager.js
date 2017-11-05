const Github = require('github-api')

class GithubManager {
    constructor (login_config) {
        this.accountName = login_config.accountName
        this.password = login_config.password
        
    }
}
