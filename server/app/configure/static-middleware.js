'use strict';
let path = require('path');
let express = require('express');
let favicon = require('serve-favicon'); // eslint-disable-line no-unused-vars

module.exports = function (app) {

    let root = app.getValue('projectRoot');

    let npmPath = path.join(root, './node_modules');
    let publicPath = path.join(root, './public');
    let browserPath = path.join(root, './browser');
    let vendorPath = path.join(root, './server/vendors');

    //app.use(favicon(app.getValue('faviconPath')));
    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));
    app.use(express.static(vendorPath));

};
