// If in production mode, use production keys. Else, use dev keys
console.log('keys.js this is process', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  console.log("keys.js development fires");
  module.exports = require('./keys_dev');
}