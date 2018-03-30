module.exports = function () {
    return {
        getPlanets,
        destroyPlanet
    };

    function getPlanets(req, res) {
        res.json([
            'Tellus',
            'Pungus',
            'Ur anus'
        ]);
    }

    function destroyPlanet() {

    }
};