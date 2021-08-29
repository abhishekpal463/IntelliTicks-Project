const mongoose = require('mongoose');
const schema = mongoose.Schema;

const propertySchema = new schema({
    name:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const Property = mongoose.model('Property',propertySchema);

module.exports = Property;

