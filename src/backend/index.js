const port = process.env.PORT || '3001';
const app = require('./routes/app');
const { logInfo } = require('@dukes-wine/js-log-library');

const startProcess = () => {
    logInfo(`Start up complete: Url shortner app listening on port ${port} 🔗`);
};

app.listen(port, startProcess);

module.exports = {
    startProcess
};
