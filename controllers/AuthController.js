const uuidv4 = require('uuid/v4');

module.exports = authDB => {
    return {
        createPassword,
        verify,
    };
    function genPassword() {
        return uuidv4();
    }
    function createPassword(req, res) {
        const player = req.body.playerId;
        if(authDB.getPassword(player)) {
            throw {
                code: 403,
                message: 'A password has already been created for ' + player,
            };
        }
        else {
            const password = genPassword();
            authDB.setPassword(player, password);
            res.json({
                password: password
            });
            res.end();
        }
    }
    function verify(req, res) {
        const player = req.body.playerId;
        const password = req.body.password;

        if(authDB.getPassword(player) === password) {
            res.end();
        }
        else {
            throw {
                code: 401,
                message: "Wrong password",
            };
        }
    }
};
