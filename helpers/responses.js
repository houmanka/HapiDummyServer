const Boom = require('boom');

module.exports = {
    authorised: () => {
        return {
            statusCode: 200,
            error: null,
            data: {token: '12123123'},
            message: 'authorised'
        }
    },
    unauthorised: () => {
        return {
            statusCode: 401,
            error: Boom.unauthorized('unauthorised'),
            data: [],
            message: null
        }
    },
    resetFoundEmail: () => {
        return {
            statusCode: 200,
            error: null,
            data: [],
            message: 'password is reset'
        }
    },
    resetNotFound: () => {
        return {
            statusCode: 406,
            error: Boom.notAcceptable('Email doesnt exist'),
            data: [],
            message: 'password is reset'
        }
    },
    recordSaved: () => {
        return {
            statusCode: 200,
            error: null,
            data: [{
                saved: true
            }],
            message: 'record is saved'
        }
    }
}