let express = require('express');
let SystemController = require('./controllers/SystemController.js');

module.exports = function () {

    return {
        start
    };

    function start() {
        let systemController = SystemController();

        let app = express();
        app.get('/', (req, res) => {
            res.end('Hej ;) P.S. pung');
        });
        app.get('/planets', systemController.getPlanets);

        app.listen(3000, '0.0.0.0');
    }
};