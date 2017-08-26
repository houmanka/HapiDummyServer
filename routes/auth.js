const Responses = require('../helpers/responses');
 const users = {
                username: 'test@example.com',
                password: '123123123',
            };           

module.exports =
[   
     {  
        method: 'POST',
        path: '/sign-in',
        handler: (request, reply) => {
            var username = request.payload.username;
            var password = request.payload.password;
            if (username === users.username && password === users.password) {
                res = Responses.authorised();
            } else {
                res =  Responses.unauthorised();
            }
            reply(res);
        }
    },  
     {  
        method: 'POST', 
        path: '/reset',
        handler: (request, reply) => { 
            var username = request.payload.username;
            if (username === users.username) {
                res = Responses.resetFoundEmail();
            } else {
                res =  Responses.resetNotFound();
            }
            reply(res);
        } 
    },
];