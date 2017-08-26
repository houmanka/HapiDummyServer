const Responses = require('../helpers/responses');
const users = {
               username: 'test@example.com',
               password: '123123123',
           };           

module.exports =
[   
    {  
       method: 'POST',
       path: '/client',
       handler: (request, reply) => {   
        console.log(request.payload);
            res = Responses.recordSaved();
            console.log(res);
            reply(res);
       }
   }
];