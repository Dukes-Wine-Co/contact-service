const { PersonModel } = require('../../config/mongo-config');
const Person = require('../../data/classes/Person');
const { findCollection } = require('../../helpers/controller-methods');

const populationFields = ['address', 'eventsAttended'];

const PersonControls = {
    find: async(req, res) => {
        const findObj = {
            collectionModel: PersonModel,
            getAll: false,
            populationQueue: populationFields
        };
        const person = await findCollection(req, findObj);
        res.json(person);
    },
    all: async(req, res) => {
        const findObj = {
            collectionModel: PersonModel,
            getAll: true,
            populationQueue: populationFields
        };
        const allPersons = await findCollection(req, findObj);
        res.json(allPersons);
    },
    create: async(req, res) => {
        const person = new Person(req.body).getBody();
        const newPerson = new PersonModel(person);
        const savedPerson = await newPerson.save();
        res.json(savedPerson);
    }
};

module.exports = PersonControls;
