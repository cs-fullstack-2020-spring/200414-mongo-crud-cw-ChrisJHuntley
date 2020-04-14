let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EntrySchema = new Schema({
    firstName: String,
    lastName: String,
    Pets: Array,
    Single: Boolean,
    PhoneNumber: Number
})

module.exports = mongoose.model('CW Entry', EntrySchema)