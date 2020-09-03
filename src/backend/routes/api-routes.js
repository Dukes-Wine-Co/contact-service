const express = require('express');
const EventControls = require('../controllers/EventController');
const PersonControls = require('../controllers/PersonController');
const AddressControls = require('../controllers/AddressController');
const BulkControls = require('../controllers/BulkController');

module.exports = app => {
    const router = express.Router();

    app.use('/api', router);

    // Address Routes
    router.get('/address', AddressControls.all);
    router.post('/address', AddressControls.create);
    router.get('/address/:id', AddressControls.find);

    // Event Routes
    router.get('/event', EventControls.all);
    router.post('/event', EventControls.create);
    router.get('/event/:id', EventControls.find);

    // Person Routes
    router.get('/person', PersonControls.all);
    router.post('/person', PersonControls.create);
    router.get('/person/:id', PersonControls.find);

    router.post('/bulk', BulkControls.create);
};
