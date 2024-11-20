const mongoose = require('mongoose');

const parkingSpaceSchema = mongoose.Schema({
    spaceId: { type: String, required: true, unique: true }, 
    type: { type: String, required: true }, 
    isAvailable: { type: Boolean, default: true }, 
});

module.exports = mongoose.model('ParkingSpace', parkingSpaceSchema);