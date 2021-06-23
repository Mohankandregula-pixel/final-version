const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const resourceSchema = new mongooose.Schema({
    resource: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    },
 
    
    
    
  
   
    
})



// collection creation 
const Resource = mongooose.model('RESOURCE', resourceSchema);

module.exports = Resource;

