const { Schema, model } = require('mongoose');

const propertySchema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: String,
        state: String,
        zipCode: String,
        units: { type: Number, default: 1, min: 1 },
        rentAmount: { type: Number, required: true },
        isActive: { type: Boolean, default: true },
        notes: String,
    },
    { timestamps: true }
);

const Property = model('Property', propertySchema);

module.exports = Property;