

module.exports = function(planetsDB) {
    return {
        getPlanets,
        settlePlanet,
        destroyPlanet
    };

    function getPlanets(req, res) {
        res.json(planetsDB.getPlanets());
    }
    function settlePlanet(req, res) {
        let player = req.body.playerId;
        let planetName = req.body.planetName;
        console.log(planetName, player);

        try {
            let planet = planetsDB.settlePlanet(planetName, player);
            res.status(200);
            res.json(planet);
            res.end();
        }
        catch(e) {
            res.status(e.code || 500);
            res.json(e);
            res.end();
        }
    }
    function destroyPlanet(req, res) {
        /*
        let planet = req.body.planetName;
        planetsDB
        */
    }
    function pung(req, res) {

    }
};
