function handleBody(req, res, next) {
    if (req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
            const rawBody = Buffer.concat(body).toString();
            try {
                req.body = JSON.parse(rawBody);
                next();
            }
            catch (e) {
                res.status(400);
                res.end();
            }
        });
    }
    else {
        next();
    }
}
function errorHandler(fn) {
    return (req, res) => {
        try {
            fn(req, res);
        }
        catch (e) {
            res.status(e.code || 500);
            res.json(e);
            res.end();
        }
    }
}
module.exports = {
    handleBody,
    errorHandler,
}
