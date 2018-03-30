module.exports = function (deps) {

    let planetsDb = deps.planetsDB;
    let ownIp = deps.ownIp;

    return {
        transit
    };

    function transit(req, res) {
        let {
            sourceIp,
            sourcePlanetName,
            playerId,
            targetIp,
            targetPlanetName,
            material,
            quantity
        } = req.body;

        if (sourceIp === ownIp && targetIp === ownIp) {
            let planets = planetsDb.getPlanets;

            let sourcePlanet = planets.find(planet => planet.name === sourcePlanetName);
            if (sourcePlanet.owner !== playerId) {
                throw new Error("🐐");
            }
            sourcePlanet[material] -= quantity;

            let targetPlanet = planets.find(planet => planet.name === targetPlanetName);
            targetPlanet[material] += quantity;
        }

    }

};