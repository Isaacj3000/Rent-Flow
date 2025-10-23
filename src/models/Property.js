const { Schema, model } = require('mongoose');

const propertySchema = new Schema(
    {
    name: { type: String, required: true, trim: true },
    address: {
    line1:{ type: String, required: true, trim: true },
    line2:{ type: String, 
    city:{ type: String, required: true, trim: true },
    state: { type: String, required: true},
    zip: { type: String, required: true},
    country: { type: String, required: true},
    },
    units: {type: Number, default: 1, min: 1},
    notes: { type: String, trim: true },
},
    },
    { timestamps: true }
);

const Property = model('Property', propertySchema);

module.exports = Property;