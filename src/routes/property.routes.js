const express = require('express');
const router = express.Router();
const { getAllProperties, createProperty , getPropertyById, updateProperty, deleteProperty} = require('../controllers/property.controller');

router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.post('/', createProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;
