const { Schema, model } = require('mongoose');
const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },

        role: {
            type: String,
            enum: ['admin', 'landlord', 'tenant'],
            default: 'tenant'
        },
    },
    { timestamps: true }
);
module.exports = model('User', userSchema);