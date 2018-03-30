
let planetDB = [
    {
        name: 'Mars',
        owner: 'Elon Musk'
    },
    {
        name: 'Tellus',
        owner: 'Samuel den store'
    },
    {
        name: 'Pungus',
        owner: 'Kung Pung IV'
    },
    {
        name: 'Ur anus',
        owner: 'Din mamma'
    }
];

module.exports = function () {
    return {
        getPlanets,
        settlePlanet,
        destroyPlanet
    };

    function getPlanets(req, res) {
        res.json(planetDB.map((planet) => planet.name));
    }
    function settlePlanet(req, res) {
        let playerId = req.body.playerId;
        let planetName = req.body.planetName;

    }
    function destroyPlanet() {

    }
    function pung(req, res) {

    }
};
