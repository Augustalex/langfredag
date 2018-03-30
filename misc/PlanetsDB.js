module.exports = function PlanetsDB() {
    let planetsDB;
    init();

    return {
        getPlanets,
        destroyPlanet,
        settlePlanet,
    };

    function init() {
        planetsDB = [
            {
                name: 'Mars',
                owner: 'Elon Musk',
            },
            {
                name: 'Tellus',
                owner: 'Samuel den store',
            },
            {
                name: 'Pungus',
                owner: 'Kung Pung IV',
            },
            {
                name: 'Ur anus',
                owner: 'Din mamma',
            },
            {
                name: 'Tatooine',
                owner: null,
            },
        ];
    }
    function getPlanets() {
        return planetsDB.map((planet) => planet.name);
    }
    function destroyPlanet(planetName) {
        planetDB = planetsDB.filter((planet) => planet.name !== planetName);
    }
    function settlePlanet(planetName, player) {
        let planet = planetsDB.find(planet => planet.name === planetName);
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
            return planet;
        }
    }
}
