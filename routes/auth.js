const Boom = require('boom');

let data = Boom.unauthorized('invalid password', 'sample')
 const users = {
                username: 'test@example.com',
                password: '123123123',
            };
let code = 401;            

module.exports = 
[   
     {  
        method: 'POST',
        path: '/sign-in',
        handler: (request, reply) => {

           let username = request.payload.username;
           let password = request.payload.password;

            if (username === users.username && password === users.password) {
                data = {
                    error: null,
                    message: "Authorised"
                }
                code = 200;
            } 

            reply(data).code(code);
        }
    },  
     {  
        method: 'GET',
        path: '/another',
        handler: (request, reply) => { 
            reply('Hello, world again!');
        } 
    },
];