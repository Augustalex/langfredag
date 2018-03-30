module.exports = () => {
    let authDB;
    init();

    return {
        getPassword,
        setPassword
    }
    function init() {
        authDB = {};
    }
    function getPassword(player) {
        return authDB[player] || null;
    }
    function setPassword(player, password) {
        authDB[player] = password;
    }
}
