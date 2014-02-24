'use strict';

module.exports = {
    db: 'mongodb://localhost/tomtato-dev',
    app: {
        name: 'Tomtato - A time and task management application - Development'
    },
    facebook: {
        clientID: '1412518242329985',
        clientSecret: 'dc5d7779fcae9eeabe8ce9d156eafe36',
        callbackURL: 'https://tomtato-c9-coocoon.c9.io/auth/facebook/callback'
    },
    github: {
        clientID: '1d31bcf4e27cf7920af8',
        clientSecret: 'ec06fe14c598e7a84d68003049f05585eaf471c1',
        callbackURL: 'https://tomtato-c9-coocoon.c9.io/auth/github/callback'
    },
    google: {
        clientID: '1035206495020-35crn3kaqr08lu9rp72cd00hlkscqn8n.apps.googleusercontent.com',
        clientSecret: 'bmPuy1zFzo-dsY8RUOJqa2J1',
        callbackURL: 'https://tomtato-c9-coocoon.c9.io/auth/google/callback'
    },
    linkedin: {
        clientID: '75q8afc9y9dknm',
        clientSecret: 'DAUAqMD8bSN8xQGK',
        callbackURL: 'https://tomtato-c9-coocoon.c9.io/auth/linkedin/callback'
    },
     twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
};
