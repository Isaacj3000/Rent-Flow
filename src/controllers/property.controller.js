const Property = require('../models/property');

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProperty = async (req, res) => {
    try {
        const newProperty = await Property.create(req.body);
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProperty = async (req, res) => {
    try {
        const updated = await Property.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        const deleted = await Property.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


    