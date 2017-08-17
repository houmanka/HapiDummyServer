'use strict';

const Hapi = require('hapi');
const Good = require('good');
const AutoRoute = require('hapi-auto-route');


const server = new Hapi.Server();

server.connection(
    {   
        routes: { cors: true }, 
        port: 3000, 
        host: 'localhost',
        labels: ['web']
    }
);

server.register([{
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, {
    register: AutoRoute,
    options: {}
}], (err) => {

     if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});




