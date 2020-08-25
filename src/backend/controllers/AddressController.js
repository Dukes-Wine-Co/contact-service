const { AddressModel } = require('../../config/mongo-config');
const Address = require('../../data/classes/Address');
const { findCollection } = require('../../helpers/controller-methods');

const AddressControls = {
    find: async(req, res) => {
        const findObj = {
            collectionModel: AddressModel,
            getAll: false,
            populationQueue: []
        };

        const address = await findCollection(req, findObj);
        res.json(address);
    },
    all: async(req, res) => {
        const findObj = {
            collectionModel: AddressModel,
            getAll: true,
            populationQueue: []
        };

        const allAddresses = await findCollection(req, findObj);
        res.json(allAddresses);
    },
    create: async(req, res) => {
        const address = new Address(req.body).getBody();
        const newAddress = new AddressModel(address);
        const savedAddress = await newAddress.save();
        res.json(savedAddress);
    }
};

module.exports = AddressControls;
