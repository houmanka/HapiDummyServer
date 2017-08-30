const Responses = require('../helpers/responses');
/**
 *  firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    contact: this.contact
 */
const objects = [
    {
        task: 'Create your first Client', 
        completed: true, 
        category: 'client'
    }, {
        task: 'Create your first Asset', 
        completed: true, 
        category: 'asset'
    }, {
        task: 'Invite some members', 
        completed: false, 
        category: 'asset'
    },{
        task: 'Assign Roles and Permissions to each member', 
        completed: false, 
        category: 'role'
    },{
        task: 'Create your first project', 
        completed: false, 
        category: 'project'
    },
]     

module.exports =
[   
    {  
        method: 'GET',
        path: '/todos',
        handler: (request, reply) => {   
            res = Responses.todoList(objects);
            console.log(res);
            reply(res);
       }
   },
   {  
    method: 'POST',
    path: '/todo',
    handler: (request, reply) => {   
        res = Responses.recordSaved();
        console.log(res);
        reply(res);
   }
}

];