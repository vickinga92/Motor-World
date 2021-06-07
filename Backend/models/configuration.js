const { Schema, model } = require('mongoose');

const ConfigurationSchema = Schema({
    
    provinces: [{ type: String }],
    brands: [{ type: String }],
    types: [{ type: String }],
    displacements: [{ type: Number }],
    fuel: [{ type: String }],
    age: [{ type: String }],
    
  });

module.exports = model('configurations', ConfigurationSchema);