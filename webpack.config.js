const path = require('path'); 
module.exports = {  
  entry: {    
    index: './public/javascripts/index.js',    
    users: './public/javascripts/users.js',    
  },  
  output: {     
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].bundle.js'  
  }
};