const Responses = require('../helpers/responses');
const asset = {
               name: 'test@example.com',
               description: '123123123',
               owner: 'rio-tinto'
           };           

module.exports =
[   
    {  
        method: 'POST',
        path: '/asset',
        handler: (request, reply) => {   
            console.log(request.payload);
            res = Responses.recordSaved();
            console.log(res);
            reply(res);
       }
   }
];