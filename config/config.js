var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'project'
    },
    port: 3000,
    db: 'mongodb://test:hello@ds061360.mongolab.com:61360/nwebstor/test'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'project'
    },
    port: 3000,
    db: 'mongodb://test:hello@ds061360.mongolab.com:61360/nwebstor/test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'project'
    },
    port: 3000,
    db: 'mongodb://test:hello@ds061360.mongolab.com:61360/nwebstor/test'
    
  }
};

module.exports = config[env];
