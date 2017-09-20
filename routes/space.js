const Responses = require('../helpers/responses');

const space = [
        {
            "title": "Ultimate",
            "price": 99,
            "cssClass": "",            
            "including": [ "100GB", "some more stuff" ], 
        },
        {
            "title": "Premium",
            "price": 39,
            "cssClass": "pricing-table-success",            
            "including": [ "50GB", "some more stuff" ], 
        },
        {
            "title": "Standard",
            "price": 29,
            "cssClass": "",
            "including": [ "20GB", "some more stuff" ], 
        },
        {
            "title": "Free",
            "price": 0,
            "cssClass": "",
            "including": [ "100MB", "some more stuff" ], 
        }
   ];        

module.exports =
[   
   {   
        method: 'GET',
        path: '/space-packages',
        handler: (request, reply) => {   
            console.log(request.payload);
            var params = request.query
            res = Responses.fetch(space);
            console.log(res); 
            reply(res);
        }
    }
];