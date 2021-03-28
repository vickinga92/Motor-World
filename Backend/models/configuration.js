const { Schema, model } = require('mongoose');

const ConfigurationSchema = Schema({
    
    provinces: [{ type: String }],
    
  });

module.exports = model('configurations', ConfigurationSchema);