const Responses = require("../helpers/responses");

module.exports = 
[   
     {  
        method: 'POST',
        path: '/user',
        handler: (request, reply) => {
            const headers = request.headers
            reply(headers);
        } 
    }
];