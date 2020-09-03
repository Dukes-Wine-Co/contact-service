const dataMap = require('../../data/constants');

const BulkControls = {
    create: async(req, res) => {
        const { dataType, requestData } = req.body;
        const { className, modelName } = dataMap[dataType];

        const dataToSubmit = requestData
            .map(dataEntry => new className(dataEntry).getBody());

        const submissionFeedback = await modelName.insertMany(dataToSubmit);
        res.json(submissionFeedback);
    }
};

module.exports = BulkControls;
