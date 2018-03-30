let express = require('express');
let SystemController = require('./controllers/SystemController.js');
let PlanetsController = require('./controllers/PlanetsController.js');
let PlanetsDB = require('./models/PlanetsDB.js');
let TransitController = require('./controllers/TransitController.js');
let ip = require('ip');
const pungUtils = require('./pungUtils.js');

module.exports = function () {

    return {
        start
    };

    function start() {
        let planetsDB = PlanetsDB();
        let systemController = SystemController(planetsDB);
        let planetsController = PlanetsController(planetsDB);
        let ownIp = ip.address();
        console.log('IP', ownIp);
        let transitController = TransitController({ planetsDB, ownIp });

        let app = express();
        app.use(pungUtils.handleBody);
        app.get('/', (req, res) => {
            res.end('Hej ;) P.S. pung ⚽🍆⚽<');
        });
        app.get('/planets', pungUtils.errorHandler(planetsController.getPlanets));
        app.post('/settle-planet', pungUtils.errorHandler(planetsController.settlePlanet));
        app.post('/destroy-planet', pungUtils.errorHandler(planetsController.destroyPlanet));
        app.post('/transit', pungUtils.errorHandler(transitController.transit));
        app.listen(3000, '0.0.0.0', () => {
            console.log("Solar system is now running");
        });
    }
};
