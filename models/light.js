const mongoose = require('mongoose'); 
 
module.exports = mongoose.model('Light', new mongoose.Schema({ 
  led1:{
    id: Number, 
    name: String, 
    address: String, 
    time: Date, 
    light: Number,
    status: String 
  },
  led2:{
    id: Number, 
    name: String, 
    address: String, 
    time: Date, 
    light: Number,
    status: String 
  },

  led3:{
    id: Number, 
    name: String, 
    address: String, 
    time: Date, 
    light: Number,
    status: String 
  },

  led4:{
    id: Number, 
    name: String, 
    address: String, 
    time: Date, 
    light: Number,
    status: String 
  }, 

  led5:{
    id: Number, 
    name: String, 
    address: String, 
    time: Date, 
    light: Number,
    status: String 
    }
})); 