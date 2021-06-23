const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const Dateonly = require('mongoose-dateonly')(mongooose);
const placedScheme = new mongooose.Schema({
    company: {
        type: String,
        required:true
    },
    studentname: {
        type: String,
        required:true
    },
 
  
    
})



// collection creation 
const Placed = mongooose.model('PLACED', placedScheme);

module.exports = Placed;

