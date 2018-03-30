let express = require('express');

module.exports = function () {

    return {
        start
    };

    function start() {
        let app = express();
        app.get('/', (req, res) => {
            res.end('Hej ;) P.S. pung');
        });
        app.listen(3000, '0.0.0.0');
    }
};