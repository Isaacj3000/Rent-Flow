const Property = require('../models/property.js');

exports.create = async (req, res) => {
    try {
        const doc = await Property.create(req.body);
        res.status(201).json(doc);
    } catch (e) {
        res.status(400).json({ error: e.message});
    }
};
//In English:
// The function waits for data from the user (req.body).
// It asks MongoDB (through the Property model) to make a new document.
// If that works, it replies with the new document and status 201 (created).
// If something goes wrong (missing field, invalid type, etc.), it catches that and replies with an error.

exports.list = async (_req, res) => {
    try {
        const docs = await Property.find().sort({ createdAt: -1 });
        res.json(docs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
// Fetches all properties from the database.
// Sorts them newest-first (-1).
// Sends the array of docs back as JSON.

exports.get = async (req, res) => {
    try {
        const doc = await Property.findById(req.params.id);
        if (!doc) return res.status(404).json({ error: 'Not found' });
        res.json(doc);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
// Looks up one property by its id (from the URL).
// If it exists → send it back.
// If it doesn’t → return 404 (not found).

exports.update = async (req, res) => {
    try {
        const doc = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!doc) return res.status(404).json({ error: 'Not found' });
        res.json(doc);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};
// Finds a property and updates it with new info.
// new: true → return the updated version.
// runValidators: true → make sure new data still follows schema rules.

exports.remove = async (req, res) => {
    try {
        const doc = await Property.findByIdAndDelete(req.params.id);
        if (!doc) return res.status(404).json({ error: 'Not Found' });
        res.json({ ok: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}