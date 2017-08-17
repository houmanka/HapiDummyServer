module.exports = 
[   
     {  
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('Hello, world!');
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