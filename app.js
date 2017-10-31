// const github = require("github-api-node")
const login_settings = require("./login.json")
const GolosManager = require('./golos_manager')
const Exception = require('./exception')

class DGVC {
    constructor(login_config) {
        this.golosManager = new GolosManager(login_config.golos)
    }
}

// function login(login_settings) {
//     let githubAuth = new github(login_settings.githubAuth)
//     let githubUser = githubAuth.getUser( )
//     githubUser.show(login_settings.githubAuth.username, (err, res) => {
//         console.log("Welcome, ", res.name);
//     })
// }

try {
    console.log("connection...")
    var dgvc = new DGVC(login_settings)
    console.log("connected!")
} catch (exception) {
    console.log(exception instanceof Exception ? exception.message : exception)
}
