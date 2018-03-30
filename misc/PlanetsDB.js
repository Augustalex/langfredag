let cloneDeep = require('clone-deep');

module.exports = function PlanetsDB() {
    let planetsDB;
    init();

    return {
        getPlanets,
        setPlanets,
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
        return cloneDeep(planetsDB);
    }
    function setPlanets(planets) {
        planetsDB = cloneDeep(planets);
    }
}
