module.exports = function(planetsDB) {
    return {
        getPlanets,
        settlePlanet,
        destroyPlanet
    };

    function getPlanets(req, res) {
        res.json(planetsDB
            .getPlanets()
            .map((planet) => planet.name)
        );
        res.end();
    }
    function settlePlanet(req, res) {
        let player = req.body.playerId;
        let planetName = req.body.planetName;
        let planets = planetsDB.getPlanets();
        let planet = planets.find(planet => planet.name === planetName);

        if(!planet) {
            throw {
                code: 404,
                message: 'Invalid planet ' + planet,
            };
        }
        else if(planet.owner) {
            if(planet.owner === player) {
                throw {
                    code: 418,
                    message: 'You already own this planet',
                }
            }
            else {
                throw {
                    code: 403,
                    message: 'Planet is already settled by ' + planet.owner,
                };
            }
        }
        else {
            planet.owner = player;
            planetsDB.setPlanets(planets);

            res.status(200);
            res.json(planet);
            res.end();
        }
    }
    function destroyPlanet(req, res) {
        /*
        let planet = req.body.planetName;
        planetsDB
        */
    }
}
