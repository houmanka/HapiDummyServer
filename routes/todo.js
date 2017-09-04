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
        category: 'clientCreation'
    }, {
        task: 'Create your first Asset', 
        completed: true, 
        category: 'assetCreation'
    }, {
        task: 'Invite some members', 
        completed: false, 
        category: 'assetMember'
    },{
        task: 'Assign Roles and Permissions to each member', 
        completed: false, 
        category: 'roleAssignment'
    },{
        task: 'Create your first project', 
        completed: false, 
        category: 'projectCreation'
    },{
        task: 'Assign some taks to your project', 
        completed: false, 
        category: 'projectTasks'
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