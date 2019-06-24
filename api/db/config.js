const pgp = require('pg-promise')({});
const keys = require('../config/keys');

const setupDB = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    console.log('config.js fires');
    return pgp({
      database: keys.databaseName,
      port: 5432,
      host: 'localhost',
      user: keys.user,
      password: keys.password,
      secret: keys.secret
    });
  }

  if (process.env.NODE_ENV === 'production') {
    return pgp(keys.databaseUrl);
  }
};

const db = setupDB();

module.exports = db;
