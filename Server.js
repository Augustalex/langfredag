let express = require('express');
let SystemController = require('./controllers/SystemController.js');
let PlanetsDB = require('./misc/PlanetsDB.js');

function handleBody(req, res, next) {
    if(req.method === "POST") {
        var body = [];
        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
            var rawBody = Buffer.concat(body).toString();
            try {
                req.body = JSON.parse(rawBody);
                next();
            }
            catch(e) {
                res.status(400);
                res.end();
            }
        });
    }
    else {
        next();
    }
}

module.exports = function () {
    return {
        start
    };

    function start() {
        let planetsDB = PlanetsDB();
        let systemController = SystemController(planetsDB);

        let app = express();
        app.use(handleBody);
        app.get('/', (req, res) => {
            res.end('Hej ;) P.S. pung');
        });
        app.post('/settle-planet', systemController.settlePlanet);
        app.get('/planets', systemController.getPlanets);
        app.listen(3000, '0.0.0.0', () => {
            console.log("Solar system is now running");
        });
    }
};
