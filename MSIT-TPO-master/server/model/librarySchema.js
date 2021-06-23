const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const librarySchema = new mongooose.Schema({
    CompanyName: {
        type: String,
        default: null,
       
    },
    CompanyDomain:{
        type: String,
        default: null,
    },
    CompanyResource:{
        type: String,
        required: true,
    
    
    }

    

  
   
    
})



// collection creation 
const Library = mongooose.model('LIBRARY', librarySchema);

module.exports = Library;