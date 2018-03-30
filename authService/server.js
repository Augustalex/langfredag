const express = require('express');
const pungUtils = require('../pungUtils.js');
const AuthController = require('../controllers/AuthController.js');
const AuthDB = require('../models/AuthDB.js');

module.exports = () => {
    return {
        start
    };
    function start() {
        const authDB = AuthDB();
        const authController = AuthController(authDB);
        const app = express();
        app.use(pungUtils.handleBody);
        app.post('/create-password', pungUtils.errorHandler(authController.createPassword));
        app.post('/verify', pungUtils.errorHandler(authController.verify));
        app.listen(1337, "0.0.0.0", () => {
            console.log("Authentication service is now running");
        });
    }
}
