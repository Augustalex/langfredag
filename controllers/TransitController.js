module.exports = function (deps) {

    let planetsDB = deps.planetsDB;
    let ownIp = deps.ownIp;

    test();

    return {
        transit
    };

    function transit(req, res) {
        let {
            playerId,
            sourceIp,
            sourcePlanetName,
            targetIp,
            targetPlanetName,
            material,
            quantity
        } = req.body;

        if (sourceIp === ownIp && targetIp === ownIp) {
            let planets = planetsDB.getPlanets();

            let sourcePlanet = planets.find(planet => planet.name === sourcePlanetName);
            if (sourcePlanet.owner !== playerId) {
                throw new Error("🐐 You are not the owner of the source planet!");
            }
            if (!sourcePlanet[material]) {
                sourcePlanet[material] = 0;
            }
            if (sourcePlanet[material] < quantity) {
                throw new Error("🐐 Not enough material.");
            }
            sourcePlanet[material] -= quantity;

            let targetPlanet = planets.find(planet => planet.name === targetPlanetName);
            if (!targetPlanet[material]) {
                targetPlanet[material] = 0;
            }
            targetPlanet[material] += quantity;

            planetsDB.setPlanets(planets);
        }

    }

    function test() {
        let originalDb = planetsDB;
        planetsDB = {
            getPlanets() {
                return [
                    {
                        name: 'P1A',
                        owner: 'P1B',
                        wood: 1
                    },
                    {
                        name: 'P2A',
                        owner: 'P2B'
                    }
                ];
            },
            setPlanets(planets){
                if (planets[0].wood === 0
                    && planets[1].wood === 1) {
                    console.log('TransitsController is OK');
                }
            }
        };
        transit({
            body: {
                playerId: 'P1B',
                sourcePlanetName: 'P1A',
                targetPlanetName: 'P2A',
                material: 'wood',
                quantity: 1,
                sourceIp: ownIp,
                targetIp: ownIp
            }
        }, {
            end(){},
            json(){}
        });
        planetsDB = originalDb;
    }

};