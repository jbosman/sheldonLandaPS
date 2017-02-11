'use strict';
let chalk = require('chalk');

// Create a node server instance! cOoL!
let server = require('http').createServer();
let RequestPromise = require('request-promise');

function selfCrawl(){

	RequestPromise('http://www.sheldonlanda.com')
	.then( () => {
		console.log('selfcrawl succeeded...');
	})
	.catch(console.error);

}

let createApplication = function () {
    let app = require('./app')();
    server.on('request', app); // Attach the Express application.
};

let startServer = function () {

    let PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

createApplication();
startServer();
setInterval( selfCrawl, 1500000); // Keep heroku site up
