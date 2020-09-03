const { logInfo, logError } = require('@dukes-wine/js-log-library');

const mongoConnect = (mongooseInstance, mongoUrl) =>
    mongooseInstance.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        logInfo({
            msg: 'Connection to mongo database established 🐍'
        });
    })
    .catch(e => {
        logError({
            msg: 'There was an error connecting to the mongo database',
            error: e
        });
    });

const configureMongoCollectionName = name => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return name;
        case 'test':
            return `Test-${name}`;
        default:
            return `Dev-${name}`;
    }
};


module.exports = {
    mongoConnect,
    configureMongoCollectionName
};
