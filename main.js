const Server = require('./Server.js');
const AuthService = require('./authService/server.js');

const server = Server();
const authService = AuthService();
server.start();
authService.start();
