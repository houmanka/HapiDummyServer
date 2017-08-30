const Responses = require('../helpers/responses');
/**
 *  firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    contact: this.contact
 */

module.exports =
[   
    {  
        method: 'POST',
        path: '/member',
        handler: (request, reply) => {   
            console.log(request.payload);
            res = Responses.recordSaved();
            console.log(res);
            reply(res);
       }
   },
   {  
    method: 'POST',
    path: '/members',
    handler: (request, reply) => {   
        console.log(request.payload);
        res = Responses.recordSaved();
        console.log(res);
        reply(res);
   }
}
];