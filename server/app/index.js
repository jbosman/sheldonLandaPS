'use strict';
let path = require('path');
let express = require('express');
let app = express();

module.exports = function () {

    // Pass our express application pipeline into the configuration
    // function located at server/app/configure/index.js
    require('./configure')(app);

    /*
     This middleware will catch any URLs resembling a file extension
     for example: .js, .html, .css
     This allows for proper 404s instead of the wildcard '/*' catching
     URLs that bypass express.static because the given file does not exist.
     */
    app.use(function (req, res, next) {

        var err;

        if (path.extname(req.path).length > 0) {
            err = new Error('Not found.');
            err.status = 404;
            next(err);
        } else {
            next();
        }

    });

    app.get('/*', function (req, res) {
        res.sendFile(app.get('indexHTMLPath'));
    });

    // Error catching endware.
    app.use(function (err, req, res, next) { // eslint-disable-line no-unused-vars
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

    return app;

};

