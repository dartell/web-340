var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//define employee schema

var employeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
});

//export the model

module.exports = mongoose.model('Employee',employeeSchema);

