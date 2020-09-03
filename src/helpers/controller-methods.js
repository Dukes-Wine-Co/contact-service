const processPopulationQueue = (dbCollection, populationQueue) => {
    if (!populationQueue.length){
        return dbCollection;
    }

    return populationQueue.reduce((promise, populateField) => promise
        .then(() => dbCollection.populate(populateField)), Promise.resolve());
};

const findCollection = async(req, options) => {
    const { collectionModel, getAll, populationQueue } = options;
    const findObj = getAll ? null : { _id: req.params.id };
    return processPopulationQueue(collectionModel.find(findObj), populationQueue);
};

const createDocument = async(req, options) => {
    const dataType = options ? options.dataType : req.body.dataType;

    const event = new Event(req.body).getBody();
    const newEvent = new EventModel(event);
    const savedEvent = await newEvent.save();
};

module.exports = {
    findCollection
};
